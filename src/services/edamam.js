import axios from 'axios';

const API_ID = import.meta.env.VITE_EDAMAM_API_ID;
const API_KEY = import.meta.env.VITE_EDAMAM_API_KEY;
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

export async function fetchRecipes(ingredient) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        type: 'public',
        q: ingredient,
        app_id: API_ID,
        app_key: API_KEY
      }
    });
    return response.data.hits.map(hit => hit.recipe);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
}
