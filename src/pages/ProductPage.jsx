import React from "react";
import { fetchRecipes } from "../services/recipeService";
import useFetch from "../hooks/useFetchRecipes";
import Header from "../Components/Header";

const ProductPage = () => {
  const { data, loading, error } = useFetch(fetchRecipes);
  const recipes = data?.recipes || [];
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;
  return (
    <div>
      <Header />
      <ul className="grid grid-cols-4 mt-5 mb-5 mx-auto max-w-7xl gap-4 ">
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
                  Let’s Cook!
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
