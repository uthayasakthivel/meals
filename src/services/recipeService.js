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

export const fetchSearchResults = async (query = "", limit = 8, page = 1) => {
  try {
    const skip = (page - 1) * limit;

    const endpoint = query.trim()
      ? `/search?q=${query}&limit=${limit}&skip=${skip}&select=name,image,cuisine`
      : `?limit=${limit}&skip=${skip}&select=name,image,cuisine`;

    const response = await recipeApi.get(endpoint);
    console.log(`data from service`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with ID ${query}:`, error);
    throw error;
  }
};
