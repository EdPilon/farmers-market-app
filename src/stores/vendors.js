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
        this.vendors = vendorSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching vendors:', error);
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
          this.currentVendor = {
            id: vendorDoc.id,
            ...vendorDoc.data()
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