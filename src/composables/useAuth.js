import { ref } from 'vue';
import { auth } from '@/config/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
  const user = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const login = async (email, password) => {
    loading.value = true;
    error.value = null;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    loading.value = true;
    error.value = null;
    try {
      await signOut(auth);
      user.value = null;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const initAuthListener = () => {
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
    });
  };

  return {
    user,
    error,
    loading,
    login,
    logout,
    initAuthListener,
  };
}
