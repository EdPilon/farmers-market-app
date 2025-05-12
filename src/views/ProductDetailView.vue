<!-- src/views/ProductDetailView.vue -->
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

    <!-- Related Products -->
    <div v-if="relatedProducts.length > 0" class="mt-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="relatedProduct in relatedProducts" 
          :key="relatedProduct.id" 
          :product="relatedProduct" 
        />
      </div>
    </div>
  </div>

  <div v-else class="text-center text-gray-500 py-8">
    <p>Loading product details...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/products';
import ProductCard from '@/components/product/ProductCard.vue';

const route = useRoute();
const productsStore = useProductsStore();
const product = ref(null);
const relatedProducts = ref([]);

const fetchProductDetails = async () => {
  const productId = route.params.id;
  await productsStore.fetchProductById(productId);
  product.value = productsStore.currentProduct;
  relatedProducts.value = productsStore.relatedProducts;
};

onMounted(fetchProductDetails);

// Watch for route changes to refetch product details
watch(() => route.params.id, fetchProductDetails);
</script>