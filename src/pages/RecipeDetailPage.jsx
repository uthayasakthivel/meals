import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetchRecipes";
import { fetchSingleRecipe } from "../services/recipeService";

const RecipeDetailPage = ({ onSearch, searchTerm }) => {
  let { recipeId } = useParams();
  const navigate = useNavigate();

  const {
    data: recipe,
    loading,
    error,
  } = useFetch(fetchSingleRecipe, [recipeId]);

  useEffect(() => {
    console.log("Resetting search term...", searchTerm);
    onSearch(""); // Attempt to reset
  }, [onSearch, recipeId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      {/* Image Section */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Title & Rating */}
      <div className="mt-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">{recipe.name}</h1>
        <span className="bg-yellow-500 text-white text-sm px-2 py-1 rounded-lg">
          ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
        </span>
      </div>

      {/* Metadata */}
      <div className="flex justify-between mt-2 text-gray-600 text-sm">
        <p>⏳ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</p>
        <p>🍽️ Serves {recipe.servings}</p>
        <p>🔥 {recipe.caloriesPerServing} Calories</p>
      </div>

      {/* Ingredients */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">📝 Ingredients</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">👨‍🍳 Instructions</h2>
        <ol className="list-decimal pl-6 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          ← Back
        </button>
        <button className="bg-crimson text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          Start Cooking!
        </button>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
