<template>
  <div class="login-view container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    await authStore.loginUser({ email: email.value, password: password.value });
    alert('Login successful!');
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Failed to login. Please try again.');
  }
};
</script>
