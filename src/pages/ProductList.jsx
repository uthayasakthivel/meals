import React from "react";
import { Link } from "react-router";
import { fetchSearchResults } from "../services/recipeService";
import useFetch from "../hooks/useFetchRecipes";

const ProductList = ({ searchTerm }) => {
  const { data, loading, error } = useFetch(
    fetchSearchResults,
    [searchTerm],
    [searchTerm]
  );
  const recipes = data?.recipes || [];
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  return (
    <>
      {recipes.length === 0 ? (
        <div className="grid place-items-center h-[75vh] text-gray-500">
          <div className="flex flex-col items-center gap-2">
            <span className="text-6xl">😞</span>
            <p className="text-3xl font-semibold">No Items Found!</p>
          </div>
        </div>
      ) : (
        <ul className="grid grid-cols-4 gap-4 ">
          {recipes?.map((recipe) => (
            <li key={recipe.id} className="aspect-[16/14] flex flex-col">
              <div className="flex-1 overflow-hidden">
                <img
                  src={recipe.image}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl bg-emerald-200"
                />
              </div>
              <div className="p-2 bg-white">
                <strong>{recipe.name}</strong>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-400">{recipe.cuisine}</p>

                  <button className="bg-[crimson] text-amber-50 px-3 py-1 rounded-2xl hover:bg-[forestgreen] transition duration-300 cursor-pointer">
                    <Link to={`recipeDetails/${recipe.id}`}> Let’s Cook!</Link>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;
