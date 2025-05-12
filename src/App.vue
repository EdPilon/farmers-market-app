<template>
  <DefaultLayout>
    <template #header>
      <div class="flex justify-between items-center bg-green-600 text-white py-4 px-6">
        <!-- Logo -->
        <h1 class="text-xl font-bold">
          <router-link to="/" class="text-white hover:underline">Farmers Market</router-link>
        </h1>

        <!-- Navigation Links -->
        <div class="flex space-x-6">
          <router-link 
            to="/vendors" 
            class="hover:underline"
          >
            Vendors
          </router-link>
          <router-link 
            to="/account" 
            class="hover:underline"
          >
            My Account
          </router-link>
        </div>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>
