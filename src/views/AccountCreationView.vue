<template>
  <div class="account-creation-view container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">Create an Account</h1>
    <form @submit.prevent="createAccount">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          class="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
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
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Roles</label>
        <div class="flex items-center space-x-4 mt-2">
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="roles.customer"
              class="mr-2"
            />
            Customer
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="roles.vendor"
              class="mr-2"
            />
            Vendor
          </label>
        </div>
      </div>
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
      >
        Create Account
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const name = ref('');
const email = ref('');
const password = ref('');
const roles = ref({ customer: false, vendor: false });

const createAccount = async () => {
  const selectedRoles = Object.keys(roles.value).filter(role => roles.value[role]);
  if (selectedRoles.length === 0) {
    alert('Please select at least one role.');
    return;
  }

  try {
    await authStore.registerUser({ name: name.value, email: email.value, password: password.value, roles: selectedRoles });
    alert('Account created successfully!');
  } catch (error) {
    console.error('Error creating account:', error);
    alert('Failed to create account. Please try again.');
  }
};
</script>
