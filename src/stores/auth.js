import { defineStore } from 'pinia';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/config/firebase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    userProfile: null,
    loading: false,
    error: null
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.user,
    isVendor: (state) => state.userProfile?.role === 'vendor',
    isAdmin: (state) => state.userProfile?.role === 'admin',
    isCustomer: (state) => state.userProfile?.role === 'customer',
    currentUserId: (state) => state.user?.uid
  },
  
  actions: {
    async registerUser({ email, password, name, roles }) {
      this.loading = true;
      this.error = null;
      
      try {
        // Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Update profile with name
        await updateProfile(userCredential.user, { displayName: name });
        
        // Create user profile in Firestore
        const userProfile = {
          name,
          email,
          roles, // Store roles as an array
          createdAt: new Date().toISOString(),
        };
        
        await setDoc(doc(db, 'userProfiles', userCredential.user.uid), userProfile);
        
        // Set user state
        this.user = userCredential.user;
        this.userProfile = userProfile;
        
        return userCredential.user;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async registerVendor({ name, contact, location, password }) {
      this.loading = true;
      this.error = null;

      try {
        // Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, contact, password);

        // Update profile with name
        await updateProfile(userCredential.user, { displayName: name });

        // Create vendor profile in Firestore
        const vendorProfile = {
          name,
          contact,
          location,
          products: [], // Initialize with an empty products array
        };

        await setDoc(doc(db, 'vendors', userCredential.user.uid), vendorProfile);

        // Set user state
        this.user = userCredential.user;
        this.userProfile = vendorProfile;

        return userCredential.user;
      } catch (error) {
        console.error('Error during vendor registration:', error.message);

        // Clean up Firebase Authentication account if Firestore write fails
        if (error.code === 'permission-denied' || error.code === 'unavailable') {
          console.warn('Cleaning up partially created account...');
          const currentUser = auth.currentUser;
          if (currentUser) {
            await currentUser.delete();
          }
        }

        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
    
    async loginUser({ email, password }) {
      this.loading = true;
      this.error = null;
      
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        
        // Fetch user profile
        await this.fetchUserProfile(userCredential.user.uid);
        
        return userCredential.user;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async loginVendor({ email, password }) {
      this.loading = true;
      this.error = null;

      try {
        // Log in the user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;

        // Fetch vendor profile
        const vendorDoc = await getDoc(doc(db, 'vendors', userCredential.user.uid));
        if (!vendorDoc.exists()) {
          throw new Error('This account is not registered as a vendor.');
        }

        this.userProfile = vendorDoc.data();
        return userCredential.user;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
    
    async logoutUser() {
      this.loading = true;
      
      try {
        await signOut(auth);
        this.user = null;
        this.userProfile = null;
      } catch (error) {
        console.error('Error logging out:', error);
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
    
    async fetchUserProfile(userId) {
      try {
        const profileDoc = await getDoc(doc(db, 'userProfiles', userId));
        
        if (profileDoc.exists()) {
          this.userProfile = profileDoc.data();
        } else {
          console.warn('User profile not found');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        this.error = error.message;
      }
    },
    
    async resetPassword(email) {
      this.loading = true;
      this.error = null;
      
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
    
    initAuthListener() {
      onAuthStateChanged(auth, async (user) => {
        this.user = user;

        if (user) {
          try {
            // Fetch vendor profile
            const vendorDoc = await getDoc(doc(db, 'vendors', user.uid));
            if (vendorDoc.exists()) {
              this.userProfile = vendorDoc.data();
            } else {
              console.warn('Vendor profile not found.');
              this.userProfile = null;
            }
          } catch (error) {
            console.error('Error fetching vendor profile:', error);
            this.error = error.message;
          }
        } else {
          this.userProfile = null;
        }
      });
    }
  }
});