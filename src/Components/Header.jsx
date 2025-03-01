import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
const Header = ({ searchTerm, onSearch }) => {
  console.log("Header rendered with searchTerm:", searchTerm);
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

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
