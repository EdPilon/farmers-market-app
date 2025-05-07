<!-- src/views/ProductDetailView.vue -->
<template>
    <div class="product-detail container mx-auto py-8 px-4">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="loader">Loading...</div>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong class="font-bold">Error:</strong>
        <span class="block sm:inline">{{ error }}</span>
      </div>
      
      <!-- Product Content -->
      <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Product Images -->
        <div class="product-images">
          <div class="bg-gray-100 rounded-lg overflow-hidden h-96">
            <img 
              :src="product.imageUrl || '/assets/images/product-placeholder.jpg'" 
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Image Gallery -->
          <div v-if="product.gallery && product.gallery.length > 0" class="mt-4 grid grid-cols-4 gap-2">
            <div 
              v-for="(image, index) in product.gallery" 
              :key="index" 
              class="bg-gray-100 rounded cursor-pointer h-20"
            >
              <img :src="image" :alt="`${product.name} view ${index + 1}`" class="w-full h-full object-cover rounded" />
            </div>
          </div>
        </div>
        
        <!-- Product Info -->
        <div class="product-info">
          <div class="flex items-center justify-between">
            <h1 class="text-3xl font-bold text-gray-800">{{ product.name }}</h1>
            
            <!-- Seasonal Badge -->
            <span v-if="product.seasonal" class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
              Seasonal
            </span>
          </div>
          
          <!-- Vendor Info -->
          <div class="mt-2 flex items-center">
            <router-link :to="`/vendors/${product.vendorId}`" class="text-green-600 hover:text-green-700 font-medium">
              {{ vendorName }}
            </router-link>
            <span class="mx-2 text-gray-500">•</span>
            <span class="text-sm text-gray-600">{{ product.category }}</span>
          </div>
          
          <!-- Price and Stock -->
          <div class="mt-6 flex items-end">
            <span class="text-2xl font-bold text-gray-900">${{ product.price.toFixed(2) }}</span>
            <span class="text-sm text-gray-500 ml-2">/ {{ product.unit }}</span>
            
            <!-- Inventory Status -->
            <div 
              class="ml-4 text-sm font-medium"
              :class="product.stockLevel > 10 ? 'text-green-600' : product.stockLevel > 0 ? 'text-orange-600' : 'text-red-600'"
            >
              <template v-if="product.stockLevel > 10">
                In Stock
              </template>
              <template v-else-if="product.stockLevel > 0">
                Low Stock ({{ product.stockLevel }} left)
              </template>
              <template v-else>
                Out of Stock
              </template>
            </div>
          </div>
          
          <!-- Description -->
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-gray-800">About this item</h3>
            <p class="mt-2 text-gray-600">{{ product.description }}</p>
          </div>
          
          <!-- Nutrition -->
          <div v-if="product.nutrition" class="mt-4">
            <h3 class="text-lg font-semibold text-gray-800">Nutrition Facts</h3>
            <div class="mt-2 grid grid-cols-2 gap-2">
              <div v-for="(value, key) in product.nutrition" :key="key" class="bg-gray-50 p-2 rounded">
                <span class="text-sm font-medium text-gray-500">{{ key }}:</span>
                <span class="text-sm ml-1">{{ value }}</span>
              </div>
            </div>
          </div>
          
          <!-- Add to Cart -->
          <div class="mt-6">
            <div class="flex items-center">
              <button 
                @click="decrementQuantity"
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 flex items-center justify-center rounded-l"
                :disabled="quantity <= 1"
              >
                -
              </button>
              <input 
                v-model="quantity" 
                type="number"
                min="1" 
                :max="product.stockLevel" 
                class="w-12 h-8 text-center border-t border-b border-gray-300"
              />
              <button 
                @click="incrementQuantity"
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 flex items-center justify-center rounded-r"
                :disabled="quantity >= product.stockLevel"
              >
                +
              </button>
              
              <button 
                @click="addToCart"
                class="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium flex-grow transition-colors"
                :disabled="product.stockLevel === 0"
              >
                Add to Cart
              </button>
            </div>
          </div>
          
          <!-- Pickup Schedule -->
          <div class="mt-6 border-t border-gray-200 pt-4">
            <h3 class="text-lg font-semibold text-gray-800">Schedule Pickup</h3>
            <p class="text-sm text-gray-600 mt-1">
              Choose a day and time to pick up this item at the farmers market.
            </p>
            <button 
              @click="$router.push('/pickup-schedule')" 
              class="mt-3 border border-green-500 text-green-600 hover:bg-green-50 px-4 py-2 rounded-md font-medium transition-colors"
            >
              Schedule Pickup
            </button>
          </div>
        </div>
      </div>
      
      <!-- Related Products -->
    <div v-if="relatedProducts.length > 0" class="mt-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">You might also like</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard 
          v-for="relatedProduct in relatedProducts"
          :key="relatedProduct.id"
          :product="relatedProduct"
        />
      </div>
    </div>
    
    <!-- Recipe Suggestions -->
    <div v-if="recipes.length > 0" class="mt-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Recipes using {{ product.name }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecipeCard 
          v-for="recipe in recipes" 
          :key="recipe.id" 
          :recipe="recipe" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductsStore } from '@/stores/products';
import { useVendorsStore } from '@/stores/vendors';
import { useCartStore } from '@/stores/cart';
import { useRecipesStore } from '@/stores/recipes';
import ProductCard from '@/components/product/ProductCard.vue';
import RecipeCard from '@/components/recipe/RecipeCard.vue';

const route = useRoute();
const router = useRouter();
const productsStore = useProductsStore();
const vendorsStore = useVendorsStore();
const cartStore = useCartStore();
const recipesStore = useRecipesStore();

const quantity = ref(1);
let unsubscribe = null;

// Computed properties
const product = computed(() => productsStore.currentProduct);
const loading = computed(() => productsStore.loading);
const error = computed(() => productsStore.error);
const relatedProducts = computed(() => productsStore.relatedProducts);
const recipes = computed(() => recipesStore.productRecipes);
const vendorName = computed(() => {
  const vendor = vendorsStore.getVendorById(product.value?.vendorId);
  return vendor ? vendor.name : 'Unknown Vendor';
});

// Methods
const incrementQuantity = () => {
  if (quantity.value < product.value.stockLevel) {
    quantity.value++;
  }
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  cartStore.addToCart({
    productId: product.value.id,
    name: product.value.name,
    price: product.value.price,
    imageUrl: product.value.imageUrl,
    vendorId: product.value.vendorId,
    quantity: quantity.value
  });
  
  // Show confirmation toast or notification
  // Implementation depends on your UI framework choice
};

// Lifecycle hooks
onMounted(async () => {
  const productId = route.params.id;
  
  // Load vendors if not already loaded
  if (vendorsStore.vendors.length === 0) {
    await vendorsStore.fetchVendors();
  }
  
  // Fetch product details
  await productsStore.fetchProductById(productId);
  
  // Start real-time updates
  unsubscribe = productsStore.subscribeToProductUpdates(productId);
  
  // Fetch recipes using this product
  if (product.value) {
    await recipesStore.fetchRecipesForProduct(product.value.name);
  }
});

// Clean up subscriptions when component is unmounted
onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});

// Watch for route changes to reload data when navigating between products
watch(() => route.params.id, async (newId) => {
  // Clean up previous subscription
  if (unsubscribe) {
    unsubscribe();
  }
  
  // Fetch new product details
  await productsStore.fetchProductById(newId);
  
  // Start new real-time updates
  unsubscribe = productsStore.subscribeToProductUpdates(newId);
  
  // Reset quantity
  quantity.value = 1;
  
  // Fetch recipes for new product
  if (product.value) {
    await recipesStore.fetchRecipesForProduct(product.value.name);
  }
});
</script>

<style scoped lang="scss">
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #10b981;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

input[type="number"] {
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>