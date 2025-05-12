<template>
  <div class="vendor-card bg-white rounded-lg shadow-md p-4">
    <!-- Vendor Name -->
    <h3 class="text-lg font-semibold text-gray-800">{{ vendor.name }}</h3>

    <!-- Vendor Location -->
    <p class="text-sm text-gray-600">{{ vendor.location }}</p>

    <!-- Vendor Contact -->
    <p class="text-sm text-gray-600">{{ vendor.contact }}</p>

    <!-- Vendor Products -->
    <div v-if="vendor.products && vendor.products.length > 0" class="mt-4">
      <h4 class="text-sm font-medium text-gray-700">Products:</h4>
      <ul class="list-disc list-inside">
        <li v-for="product in vendor.products" :key="product.id">
          {{ product.name || 'Unnamed Product' }} - 
          <span v-if="product.price !== undefined && !isNaN(product.price)">${{ product.price.toFixed(2) }}</span>
          <span v-else>Price not available</span>
        </li>
      </ul>
    </div>
    <div v-else class="mt-4 text-sm text-gray-500">
      No products available.
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  vendor: {
    type: Object,
    required: true,
  },
});
</script>