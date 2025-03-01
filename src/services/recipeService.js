import recipeApi from "../api/axiosInstance";

export const fetchRecipes = async () => {
  try {
    const response = await recipeApi.get();
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
