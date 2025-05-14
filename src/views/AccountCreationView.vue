<template>
  <div class="account-creation-view container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">Create a Vendor Account</h1>
    <form @submit.prevent="createAccount">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Vendor Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          class="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div class="mb-4">
        <label for="contact" class="block text-sm font-medium text-gray-700">Contact</label>
        <input
          id="contact"
          v-model="contact"
          type="email"
          class="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div class="mb-4">
        <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
        <input
          id="location"
          v-model="location"
          type="text"
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
        Create Account
      </button>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const name = ref('');
const contact = ref('');
const location = ref('');
const password = ref('');
const error = ref('');

const createAccount = async () => {
  try {
    await authStore.registerVendor({
      name: name.value,
      contact: contact.value,
      location: location.value,
      password: password.value,
    });
    alert('Vendor account created successfully!');
  } catch (err) {
    error.value = authStore.error || 'Failed to create account. Please try again.';
  }
};
</script>
