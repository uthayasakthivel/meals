import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchSearchResults } from "../services/recipeService";
import useFetch from "../hooks/useFetchRecipes";
import ReactPaginate from "react-paginate";

const ProductList = ({ searchTerm }) => {
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data, loading, error } = useFetch(
    fetchSearchResults,
    [searchTerm, limit, page],
    [searchTerm, limit, page]
  );

  const recipes = data?.recipes || [];
  const totalItems = data?.total || 0;

  // console.log(totalItems, "totalItems");

  const pageCount = Math.ceil(totalItems / limit);
  // console.log(limit, "limit");
  // console.log(pageCount, "pageCount");
  console.log(page, "current page");

  const handlePageClick = ({ selected }) => {
    setPage((prevPage) => {
      console.log("Previous Page:", prevPage);
      console.log("Updating to:", selected + 1);
      return selected + 1;
    });
  };

  useEffect(() => {
    console.log("Updated page:", page);
  }, [page]);

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

      {pageCount > 1 && (
        <div className="flex justify-center mt-6">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            forcePage={page - 1}
            activeClassName="bg-[crimson] text-white"
            containerClassName="flex items-center space-x-2"
            pageClassName="px-3 py-1 border rounded-md cursor-pointer"
            previousClassName="px-3 py-1 border rounded-md cursor-pointer"
            nextClassName="px-3 py-1 border rounded-md cursor-pointer"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      )}
    </>
  );
};

export default ProductList;
