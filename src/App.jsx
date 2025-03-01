import React from "react";
import Home from "./pages/Home";
import RecipeDetailPage from "./pages/RecipeDetailPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
const App = () => {
  return (
    <div className="max-w-7xl mt-5 mb-5 mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="recipeDetails/:recipeId"
            element={<RecipeDetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
