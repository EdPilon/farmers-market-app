<template>
  <div class="account-view container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">My Account</h1>
    <div v-if="user">
      <p><strong>Name:</strong> {{ user.displayName }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <router-link 
        to="/manage-products" 
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-block"
      >
        Manage Products
      </router-link>
      <button 
        @click="logout" 
        class="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
    <div v-else>
      <p class="mb-4">You are not logged in.</p>
      <div class="flex space-x-4">
        <router-link 
          to="/create-account" 
          class="bg-green-500 hover:bg-green-600 py-2 px-4 rounded"
        >
          Create Account
        </router-link>
        <router-link 
          to="/login" 
          class="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
        >
          Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const { user } = authStore;

const logout = async () => {
  try {
    await authStore.logoutUser();
    alert('You have been logged out.');
    router.push('/'); // Redirect to the home page after logout
  } catch (error) {
    console.error('Error logging out:', error);
    alert('Failed to log out. Please try again.');
  }
};
</script>
