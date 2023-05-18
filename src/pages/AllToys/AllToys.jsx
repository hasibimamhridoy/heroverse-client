import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    fetch(`http://localhost:5000/searchPoduct/${e.target.name.value}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  return (
    <div className="mx-1">
      <h1 className="text-xl text-center lg:my-10 my-5 lg:text-3xl text-white font-semibold">
        All Toys
      </h1>

    
      <div className="search lg:my-10 my-5 mx-auto lg:w-[70%]">
        <form onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              name="name"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by toy name"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-blfocus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Toy Name
              </th>
              <th scope="col" className="px-6 py-3">
                Saller Name
              </th>
              <th scope="col" className="px-6 py-3">
                Sub Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Detailes
              </th>
            </tr>
          </thead>

          {products.map((product) => {
            const {
              category_id,
              description,
              name,
              picture,
              price,
              quantity,
              rating,
              seller_email,
              seller_name,
              sub_category,
              _id,
            } = product;
            return (
              <tbody key={_id}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {name.slice(0, 50)}...
                  </th>
                  <td className="px-6 py-4">{seller_name}</td>
                  <td className="px-6 py-4">{sub_category}</td>
                  <td className="px-6 py-4">$ {price}</td>
                  <td className="px-6 py-4">{quantity}</td>
                  <td className="px-6 py-4">
                    <Link to={`/productsDetails/${_id}`}>
                      <a className="font-medium text-purple-500 dark:text-blue-500 hover:underline">
                        View Detailes
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
