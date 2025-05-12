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
    
    async logoutUser() {
      this.loading = true;
      
      try {
        await signOut(auth);
        this.user = null;
        this.userProfile = null;
      } catch (error) {
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
      return onAuthStateChanged(auth, async (user) => {
        this.user = user;
        
        if (user) {
          await this.fetchUserProfile(user.uid);
        } else {
          this.userProfile = null;
        }
      });
    }
  }
});