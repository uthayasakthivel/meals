import React, { useState, useCallback } from "react";

const Header = ({ searchTerm, onSearch }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => cb(...args), delay);
    };
  };

  // Memoize the debounced function
  const debouncedSearch = useCallback(debounce(onSearch, 1000), [onSearch]);

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update local state immediately
    debouncedSearch(e.target.value); // Delay API call
  };

  return (
    <div className="font-poppins m-5 ml-auto flex justify-between">
      <h2 className="text-3xl">
        The Ultimate <span className="font-bold">Cookbook</span>
      </h2>
      <div className="flex items-center border-amber-100 border-b-2 rounded-2xl px-4">
        <input
          type="text"
          placeholder="Search Recipes..."
          className="outline-0 border-0"
          onChange={handleChange}
          value={inputValue}
        />
      </div>
    </div>
  );
};

export default Header;
