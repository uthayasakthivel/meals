import React, { useState } from "react";
import CartPage from "./cartPage";
import Header from "../Components/Header";
import ProductList from "./ProductList";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <ProductList searchTerm={searchTerm} />
      {/* <CartPage /> */}
    </div>
  );
};

export default Home;
