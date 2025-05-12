<template>
  <div class="browse-vendors-view container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">Browse Vendors</h1>
    <VendorList />
  </div>
</template>

<script setup>
import VendorList from '@/components/vendor/VendorList.vue';
import { onMounted } from 'vue';
import { useVendorsStore } from '@/stores/vendors';

const vendorsStore = useVendorsStore();

onMounted(() => {
  vendorsStore.fetchVendors(); // Ensure this is called
});
</script>