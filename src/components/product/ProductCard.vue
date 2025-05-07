<template>
  <div class="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img 
      :src="product.imageUrl || '/assets/images/product-placeholder.jpg'" 
      :alt="product.name" 
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 truncate">{{ product.name }}</h3>
      <p class="text-sm text-gray-600 mt-2 truncate">${{ product.price.toFixed(2) }}</p>
      <router-link 
        :to="`/products/${product.id}`" 
        class="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
      >
        View Details
      </router-link>
    </div>
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
