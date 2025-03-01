import recipeApi from "../api/axiosInstance";

export const fetchRecipes = async () => {
  try {
    const response = await recipeApi.get();
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const fetchSingleRecipe = async (recipeId) => {
  try {
    const response = await recipeApi.get(`/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with ID ${recipeId}:`, error);
    throw error;
  }
};

export const fetchSearchResults = async (query) => {
  try {
    const response = await recipeApi.get(`/search?q=${query}`);
    console.log(`data from service`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with ID ${query}:`, error);
    throw error;
  }
};
