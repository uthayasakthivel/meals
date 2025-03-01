import React, { useState } from "react";
import Home from "./pages/Home";
import RecipeDetailPage from "./pages/RecipeDetailPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Components/Header.jsx";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mt-5 mb-5 mx-auto">
      <BrowserRouter>
        <Header onSearch={setSearchTerm} searchTerm={searchTerm} />
        <Routes>
          <Route
            path="/"
            element={<Home searchTerm={searchTerm} onSearch={setSearchTerm} />}
          />
          <Route
            path="recipeDetails/:recipeId"
            element={
              <RecipeDetailPage
                onSearch={setSearchTerm}
                searchTerm={searchTerm}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
