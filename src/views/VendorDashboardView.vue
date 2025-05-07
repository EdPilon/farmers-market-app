<template>
  <div class="vendor-dashboard-view container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">{{ vendor.name }}</h1>
    <p class="text-gray-600 mb-6">{{ vendor.description }}</p>
    <h2 class="text-xl font-semibold mb-4">Products</h2>
    <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
    <p v-else class="text-gray-500">No products available.</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useVendorsStore } from '@/stores/vendors';
import { useProductsStore } from '@/stores/products';
import ProductCard from '@/components/product/ProductCard.vue';

const route = useRoute();
const vendorsStore = useVendorsStore();
const productsStore = useProductsStore();

const vendor = computed(() => vendorsStore.currentVendor);
const products = computed(() => productsStore.getProductsByVendorId(vendor.value?.id));

onMounted(async () => {
  const vendorId = route.params.id;
  await vendorsStore.fetchVendorById(vendorId);
  await productsStore.fetchProducts();
});
</script>
