<template>
  <div class="recipes-view container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">Recipes</h1>
    <div v-if="recipes.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <RecipeCard 
        v-for="recipe in recipes" 
        :key="recipe.id" 
        :recipe="recipe" 
      />
    </div>
    <p v-else class="text-gray-500">No recipes found.</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRecipesStore } from '@/stores/recipes';
import RecipeCard from '@/components/recipe/RecipeCard.vue';

const recipesStore = useRecipesStore();
const recipes = computed(() => recipesStore.recipes);

onMounted(async () => {
  await recipesStore.fetchRecipes();
});
</script>
