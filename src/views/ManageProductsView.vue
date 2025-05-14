<template>
  <div class="manage-products-view container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">Manage Products</h1>
    <div v-if="products.length > 0">
      <ul class="space-y-4">
        <li 
          v-for="product in products" 
          :key="product.id" 
          class="p-4 border rounded-lg shadow-sm flex justify-between items-center"
        >
          <div>
            <h2 class="text-lg font-semibold">{{ product.name }}</h2>
            <p class="text-sm text-gray-600">${{ product.price.toFixed(2) }}</p>
            <p class="text-sm text-gray-500">Category: {{ product.category }}</p>
          </div>
          <button 
            @click="deleteProduct(product.id)" 
            class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="text-gray-500">No products found. Add your first product below.</p>
    </div>
    <form @submit.prevent="addProduct" class="mt-6">
      <h2 class="text-xl font-bold mb-4">Add New Product</h2>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Product Name</label>
        <input 
          id="name" 
          v-model="newProduct.name" 
          type="text" 
          class="w-full p-3 border border-gray-300 rounded-lg" 
          required 
        />
      </div>
      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
        <input 
          id="price" 
          v-model="newProduct.price" 
          type="number" 
          step="0.01" 
          class="w-full p-3 border border-gray-300 rounded-lg" 
          required 
        />
      </div>
      <div class="mb-4">
        <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
        <input 
          id="category" 
          v-model="newProduct.category" 
          type="text" 
          class="w-full p-3 border border-gray-300 rounded-lg" 
          required 
        />
      </div>
      <button 
        type="submit" 
        class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
      >
        Add Product
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProductsStore } from '@/stores/products';
import { useVendorsStore } from '@/stores/vendors';
import { useAuthStore } from '@/stores/auth';

const productsStore = useProductsStore();
const vendorsStore = useVendorsStore();
const authStore = useAuthStore();
const products = ref(productsStore.products);
const newProduct = ref({ name: '', price: 0, category: '' });

const addProduct = async () => {
  try {
    // Automatically set the vendor ID from the logged-in user's profile
    const vendorId = authStore.user?.uid;
    newProduct.value.vendorId = vendorId;

    // Add the product to the database
    const productId = await productsStore.addProduct(newProduct.value);

    // Add the product ID to the vendor's products array
    await vendorsStore.addProductToVendor(vendorId, productId);

    // Reset the form
    newProduct.value = { name: '', price: 0, category: '' };
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

const deleteProduct = async (id) => {
  await productsStore.removeProduct(id);
};
</script>
