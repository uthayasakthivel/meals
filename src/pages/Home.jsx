import React from "react";
import CartPage from "./cartPage";

import ProductList from "./ProductList";

const Home = ({ searchTerm }) => {
  return (
    <div>
      <ProductList searchTerm={searchTerm} />
      {/* <CartPage /> */}
    </div>
  );
};

export default Home;
