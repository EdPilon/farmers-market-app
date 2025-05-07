import { defineStore } from 'pinia';
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  query, 
  where, 
  onSnapshot,
  limit 
} from 'firebase/firestore';
import { db } from '@/config/firebase';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    currentProduct: null,
    relatedProducts: [],
    loading: false,
    error: null,
    recentlyViewed: []
  }),
  
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    },
    
    getProductsByVendorId: (state) => (vendorId) => {
      return state.products.filter(product => product.vendorId === vendorId);
    },
    
    getProductsByCategory: (state) => (category) => {
      return state.products.filter(product => product.category === category);
    },
    
    getFeaturedProducts: (state) => {
      return state.products.filter(product => product.featured);
    },
    
    getRecentlyViewed: (state) => {
      return state.recentlyViewed
        .map(id => state.products.find(product => product.id === id))
        .filter(product => product !== undefined);
    }
  },
  
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const productsCollection = collection(db, 'products');
        const productSnapshot = await getDocs(productsCollection);
        this.products = productSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
    
    async fetchProductById(id) {
      this.loading = true;
      try {
        const productRef = doc(db, 'products', id);
        const productDoc = await getDoc(productRef);
        
        if (productDoc.exists()) {
          this.currentProduct = {
            id: productDoc.id,
            ...productDoc.data()
          };
          
          // Add to recently viewed
          this.addToRecentlyViewed(id);
          
          // Fetch related products
          await this.fetchRelatedProducts(this.currentProduct.category, this.currentProduct.vendorId);
        } else {
          throw new Error('Product not found');
        }
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching product:', error);
      } finally {
        this.loading = false;
      }
    },
    
    async fetchRelatedProducts(category, vendorId) {
      try {
        const productsQuery = query(
          collection(db, 'products'),
          where('category', '==', category),
          limit(4)
        );
        const vendorQuery = query(
          collection(db, 'products'),
          where('vendorId', '==', vendorId),
          limit(4)
        );

        const [relatedSnapshot, vendorSnapshot] = await Promise.all([
          getDocs(productsQuery),
          getDocs(vendorQuery)
        ]);

        this.relatedProducts = [
          ...relatedSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })),
          ...vendorSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        ].filter(product => product.id !== this.currentProduct?.id);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    },

    async fetchWeatherPromotions(weatherCondition) {
      try {
        const promoQuery = query(
          collection(db, 'products'),
          where('promotions.weatherCondition', '==', weatherCondition),
          limit(5)
        );
        const promoSnapshot = await getDocs(promoQuery);
        return promoSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error('Error fetching weather promotions:', error);
        return [];
      }
    },

    subscribeToProductUpdates(id) {
      const productRef = doc(db, 'products', id);
      return onSnapshot(productRef, (doc) => {
        if (doc.exists()) {
          this.currentProduct = {
            id: doc.id,
            ...doc.data()
          };
        }
      });
    },
    
    addToRecentlyViewed(productId) {
      // Remove if already exists
      const index = this.recentlyViewed.indexOf(productId);
      if (index > -1) {
        this.recentlyViewed.splice(index, 1);
      }
      
      // Add to the beginning
      this.recentlyViewed.unshift(productId);
      
      // Limit to 10 items
      if (this.recentlyViewed.length > 10) {
        this.recentlyViewed.pop();
      }
      
      // Save to localStorage
      localStorage.setItem('recentlyViewed', JSON.stringify(this.recentlyViewed));
    },
    
    loadRecentlyViewed() {
      const saved = localStorage.getItem('recentlyViewed');
      if (saved) {
        this.recentlyViewed = JSON.parse(saved);
      }
    }
  }
});