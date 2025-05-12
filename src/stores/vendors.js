import { defineStore } from 'pinia';
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  query, 
  where, 
  onSnapshot 
} from 'firebase/firestore';
import { db } from '@/config/firebase';

export const useVendorsStore = defineStore('vendors', {
  state: () => ({
    vendors: [],
    currentVendor: null,
    loading: false,
    error: null,
    favoriteVendors: [],
  }),
  
  getters: {
    getVendorById: (state) => (id) => {
      return state.vendors.find(vendor => vendor.id === id);
    },
    
    getFavoriteVendors: (state) => {
      return state.vendors.filter(vendor => 
        state.favoriteVendors.includes(vendor.id)
      );
    }
  },
  
  actions: {
    async fetchVendors() {
      this.loading = true;
      try {
        const vendorsCollection = collection(db, 'vendors');
        const vendorSnapshot = await getDocs(vendorsCollection);

        // Resolve product references for each vendor
        const vendorPromises = vendorSnapshot.docs.map(async (docSnapshot) => {
          const vendorData = docSnapshot.data();

          // Ensure products is an array of strings (product IDs)
          if (!Array.isArray(vendorData.products)) {
            console.warn(`Vendor ${docSnapshot.id} has an invalid products field.`);
            vendorData.products = [];
          }

          const productPromises = vendorData.products.map(async (productId) => {
            const productRef = doc(db, 'products', productId);
            const productDoc = await getDoc(productRef);
            return productDoc.exists() ? { id: productDoc.id, ...productDoc.data() } : null;
          });

          const products = (await Promise.all(productPromises)).filter(product => product !== null);

          return {
            id: docSnapshot.id,
            ...vendorData,
            products, // Replace product IDs with actual product data
          };
        });

        this.vendors = await Promise.all(vendorPromises);
      } catch (error) {
        console.error('Error fetching vendors:', error.message);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    
    async fetchVendorById(id) {
      this.loading = true;
      try {
        const vendorRef = doc(db, 'vendors', id);
        const vendorDoc = await getDoc(vendorRef);

        if (vendorDoc.exists()) {
          const vendorData = vendorDoc.data();

          // Resolve product IDs to actual product documents
          const productPromises = vendorData.products.map(async (productId) => {
            const productRef = doc(db, 'products', productId);
            const productDoc = await getDoc(productRef);
            return productDoc.exists() ? { id: productDoc.id, ...productDoc.data() } : null;
          });

          const products = (await Promise.all(productPromises)).filter(product => product !== null);

          this.currentVendor = {
            id: vendorDoc.id,
            ...vendorData,
            products, // Replace product IDs with actual product data
          };
        } else {
          throw new Error('Vendor not found');
        }
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching vendor:', error);
      } finally {
        this.loading = false;
      }
    },
    
    subscribeToVendorUpdates(id) {
      const vendorRef = doc(db, 'vendors', id);
      return onSnapshot(vendorRef, (doc) => {
        if (doc.exists()) {
          this.currentVendor = {
            id: doc.id,
            ...doc.data()
          };
        }
      });
    },
    
    toggleFavoriteVendor(vendorId) {
      const index = this.favoriteVendors.indexOf(vendorId);
      if (index === -1) {
        this.favoriteVendors.push(vendorId);
      } else {
        this.favoriteVendors.splice(index, 1);
      }
      // Save to local storage for persistence
      localStorage.setItem('favoriteVendors', JSON.stringify(this.favoriteVendors));
    },
    
    loadFavoriteVendors() {
      const saved = localStorage.getItem('favoriteVendors');
      if (saved) {
        this.favoriteVendors = JSON.parse(saved);
      }
    }
  }
});