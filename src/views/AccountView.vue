<template>
  <div class="account-view container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">My Account</h1>
    <div v-if="user">
      <p><strong>Name:</strong> {{ user.displayName }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <button 
        @click="logout" 
        class="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
    <div v-else>
      <p>You are not logged in.</p>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth';

const { user, logout } = useAuth();
</script>
