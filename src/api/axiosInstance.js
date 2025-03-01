import axios from "axios";

const recipeApi = axios.create({
  method: "GET",
  baseURL: "https://dummyjson.com/recipes", // Common API URL
  timeout: 5000, // 5 seconds timeout
});

export default recipeApi;
