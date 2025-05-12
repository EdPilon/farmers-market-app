<template>
  <div class="vendor-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div 
      v-for="vendor in vendors" 
      :key="vendor.id" 
      class="border-b border-gray-300 pb-4"
    >
      <VendorCard :vendor="vendor" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useVendorsStore } from '@/stores/vendors';
import VendorCard from './VendorCard.vue';

const vendorsStore = useVendorsStore();
const vendors = computed(() => vendorsStore.vendors);
</script>
