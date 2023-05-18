import { useEffect, useState } from "react";

const TopRated = () => {
  const [topRated, setProducts] = useState([]);

  //here is pagination
  const [totalRated, setTotalRated] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState();
  const [pageLimit, setPageLimit] = useState(3);
  const pages = Math.ceil(totalRated / pageLimit);
  const pageButton = [];
  for (let index = 0; index < pages; index++) {
    pageButton.push(index);
  }
  useEffect(() => {
    fetch(`http://localhost:5000/topRatedCount`)
      .then((res) => res.json())
      .then((data) => setTotalRated(data.totalRatedItem));
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:5000/topRated?page=${currentPage}&limit=${pageLimit}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, pageLimit]);

  //handle previous and next btn error
  const handlePreviousPage = () => {
    if (currentPage == 0) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage == Math.max(...pageButton)) {
      setCurrentPage(Math.max(...pageButton));
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <h1 className="text-xl text-center lg:my-10 my-5 lg:text-3xl text-white font-semibold">
        Top Rated Products
      </h1>
      <div className="grid lg:grid-cols-3 gap-5 mx-auto lg:my-10 my-5 w-[100%] p-5 grid-cols-1">
        {topRated.map((rProduct) => {
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
          } = rProduct;
          return (
            <article
              key={_id}
              className="rounded-xl w-full bg-purple-800 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            >
              <a>
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    className="h-52 w-full object-fill"
                    src={picture}
                    alt="Hotel Photo"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm text-slate-400">
                      {rating}
                    </span>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-gray-300">{name}</h2>
                  <h1 className="text-gray-300">
                    Quantity :
                    <span className="bg-green-100 ml-3 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      {quantity}
                    </span>
                  </h1>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-white">${price}</p>

                    <div className="flex items-center space-x-1.5 rounded-lg bg-white px-4 py-1.5 text-purple-800 duration-100 hover:bg-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          );
        })}
      </div>

      <div className="flex justify-center px-5">
        <nav aria-label="Page navigation example">
          <ul className="flex gap-y-7 flex-wrap flex-shrink flex-grow -space-x-px">
            <li>
              <a
                onClick={handlePreviousPage}
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>

            {pageButton.map((btn) => {
              return (
                <li onClick={() => setCurrentPage(btn)} key={btn}>
                  <a
                    className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300   dark:bg-gray-800 cursor-pointer dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      currentPage === btn &&
                      "bg-purple-700 text-white border-none hover:bg-purple-700 hover:text-white"
                    }`}
                  >
                    {btn}
                  </a>
                </li>
              );
            })}

            <li>
              <a
                onClick={handleNextPage}
                className="px-3 mr-5 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
            <div className="ml-3">
              <select
              onChange={(e)=>setPageLimit(e.target.value)}
                id="countries"
                className="bg-gray-50 -mt-2 w-[3rem] text-gray-900 text-sm rounded-lg  block p-2.5"
              >
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
              </select>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopRated;
