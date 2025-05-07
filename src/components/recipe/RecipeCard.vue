<template>
  <div class="recipe-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <!-- Recipe Image -->
    <img 
      :src="recipe.image || '/assets/images/recipe-placeholder.jpg'" 
      :alt="recipe.label" 
      class="w-full h-48 object-cover"
    />
    
    <!-- Recipe Info -->
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 truncate">{{ recipe.label }}</h3>
      <p class="text-sm text-gray-600 mt-2 truncate">{{ recipe.source }}</p>
      
      <!-- Action Button -->
      <a 
        :href="recipe.url" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
      >
        View Recipe
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  recipe: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.recipe-card img {
  border-bottom: 1px solid #e5e7eb;
}
</style>
