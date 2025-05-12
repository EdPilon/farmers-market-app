<template>
  <div class="product-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 border-b border-gray-300">
    <!-- Product Name -->
    <h3 class="text-base font-semibold text-gray-800">{{ product.name }}</h3>

    <!-- Product Price -->
    <p class="text-sm text-gray-600 mt-2">${{ product.price.toFixed(2) }}</p>

    <!-- Action Button -->
    <router-link 
      :to="`/products/${product.id}`" 
      class="mt-3 inline-block text-sm font-medium text-green-600 hover:text-green-700"
    >
      View Details
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>
