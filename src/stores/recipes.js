import { defineStore } from 'pinia';

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [],
  }),
  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
    },
  },
});