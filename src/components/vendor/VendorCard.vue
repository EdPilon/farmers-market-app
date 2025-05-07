<template>
    <div 
      class="vendor-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      :class="{ 'border-2 border-green-500': isFavorite }"
    >
      <!-- Vendor Image -->
      <div class="relative h-48 overflow-hidden">
        <img 
          :src="vendor.imageUrl || '/assets/images/vendor-placeholder.jpg'" 
          :alt="vendor.name"
          class="w-full h-full object-cover"
        />
        <!-- Today's Status Badge -->
        <div 
          v-if="vendor.isOpen" 
          class="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full"
        >
          Open Today
        </div>
        <div 
          v-else 
          class="absolute top-3 right-3 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full"
        >
          Closed Today
        </div>
        
        <!-- Favorite Button -->
        <button 
          @click.stop="toggleFavorite"
          class="absolute top-3 left-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            class="w-5 h-5" :class="isFavorite ? 'text-red-500' : 'text-gray-400'">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
      </div>
      
      <!-- Vendor Info -->
      <div class="p-4">
        <div class="flex justify-between items-start">
          <h3 class="text-lg font-semibold text-gray-800">{{ vendor.name }}</h3>
          <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">{{ vendor.category }}</span>
        </div>
        
        <p class="text-sm text-gray-600 mt-2">{{ vendor.description }}</p>
        
        <!-- Fresh Items Count -->
        <div class="flex items-center mt-3 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <span>{{ vendor.freshlyStokedItems || 0 }} Fresh Items Today</span>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex justify-between mt-4">
          <router-link 
            :to="`/vendors/${vendor.id}`"
            class="text-sm font-medium text-green-600 hover:text-green-700"
          >
            View Products
          </router-link>
          
          <button 
            v-if="vendor.isOpen" 
            @click="$router.push(`/vendors/${vendor.id}`)"
            class="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-1 px-3 rounded-md transition-colors"
          >
            Shop Now
          </button>
          <span v-else class="text-sm text-gray-500">Opening {{ vendor.nextOpenDay }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useVendorsStore } from '@/stores/vendors';
  
  const props = defineProps({
    vendor: {
      type: Object,
      required: true
    }
  });
  
  const vendorsStore = useVendorsStore();
  
  const isFavorite = computed(() => {
    return vendorsStore.favoriteVendors.includes(props.vendor.id);
  });
  
  const toggleFavorite = (event) => {
    event.stopPropagation();
    vendorsStore.toggleFavoriteVendor(props.vendor.id);
  };
  </script>