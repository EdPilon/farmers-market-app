<template>
  <div class="product-detail">
    <h1 class="text-2xl font-bold">{{ product.name }}</h1>
    <p class="text-gray-600">{{ product.description }}</p>
    <img 
      :src="product.imageUrl || '/assets/images/product-placeholder.jpg'" 
      :alt="product.name" 
      class="w-full h-64 object-cover mt-4"
    />
    <div class="mt-4">
      <span class="text-lg font-semibold text-green-600">${{ product.price.toFixed(2) }}</span>
      <span class="text-sm text-gray-500 ml-2">/ {{ product.unit }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore();
const product = computed(() => productsStore.currentProduct);
</script>
