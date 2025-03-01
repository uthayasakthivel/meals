import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import useFetch from "../hooks/useFetchRecipes";
import { fetchSearchResults } from "../services/recipeService";
const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const { data, loading, error } = useFetch(
    fetchSearchResults,
    [searchTerm],
    [searchTerm]
  );

  const recipes = data?.recipes || [];

  console.log(recipes, "from Header");

  return (
    <div className="font-poppins m-5 ml-auto flex justify-between">
      <h2 className="text-3xl">
        The Ultimate <span className="font-bold">Cookbook</span>
      </h2>
      <div className="flex items-center border-amber-100 border-b-2 rounded-2xl px-4 ">
        <input
          type="text"
          placeholder="Search Recipes..."
          className="outline-0 border-0"
          onChange={handleChange}
          value={searchTerm}
        />
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
