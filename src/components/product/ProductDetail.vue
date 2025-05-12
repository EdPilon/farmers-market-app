<template>
  <div v-if="product" class="product-detail p-4 border-b border-gray-300">
    <!-- Product Name -->
    <h1 class="text-xl font-bold text-gray-800">{{ product.name }}</h1>
    
    <!-- Product Description -->
    <p class="text-sm text-gray-600 mt-2">{{ product.description }}</p>
    
    <!-- Product Price -->
    <div class="mt-4">
      <span class="text-lg font-semibold text-green-600">${{ product.price.toFixed(2) }}</span>
      <span class="text-sm text-gray-500 ml-2">/ {{ product.unit }}</span>
    </div>
  </div>
  
  <div v-else class="text-center text-gray-500 py-8">
    <p>Product details are not available.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/products';

const route = useRoute();
const productsStore = useProductsStore();
const product = ref(null);

onMounted(async () => {
  const productId = route.params.id;
  await productsStore.fetchProductById(productId);
  product.value = productsStore.currentProduct;
});
</script>
