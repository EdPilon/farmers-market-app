<template>
  <div class="vendor-dashboard-view container mx-auto py-6">
    <div v-if="vendor">
      <h1 class="text-2xl font-bold mb-4">{{ vendor.name }}</h1>
      <p class="text-gray-600 mb-6">{{ vendor.contact }}</p>
      <h2 class="text-xl font-semibold mb-4">Products</h2>
      <div v-if="vendor.products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in vendor.products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
      <p v-else class="text-gray-500">No products available.</p>
    </div>
    <p v-else class="text-gray-500">Loading vendor details...</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useVendorsStore } from '@/stores/vendors';
import ProductCard from '@/components/product/ProductCard.vue';

const route = useRoute();
const vendorsStore = useVendorsStore();

const vendor = computed(() => vendorsStore.currentVendor);

onMounted(async () => {
  const vendorId = route.params.id;
  await vendorsStore.fetchVendorById(vendorId);
});
</script>