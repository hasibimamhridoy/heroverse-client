import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { AuthContext } from "../../ContextProvider/AuthContextProvider";
import swal from "sweetalert";
import Spinner from "../../shared/Spinner/Spinner";

const MyToys = () => {
  const { user ,loading } = useContext(AuthContext);

  const [sortValue,setSortValue] = useState(-1)
  console.log(sortValue);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://heroverse-toys-server-site.vercel.app/myAddedProducts?email=${user && user.email}&sortValue=${sortValue}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user,sortValue]);

  const handleDeleted = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://heroverse-toys-server-site.vercel.app/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            const remaining = products.filter((product) => product._id !== _id);
            setProducts(remaining);
          });

        swal("Poof! Your Product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Product file is safe! Not Deleted");
      }
    });
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="mx-1">
      <h1 className="text-xl text-center lg:my-10 my-5 lg:text-3xl text-white font-semibold">
        My Added Toys
      </h1>

      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-white dark:text-white"
      >
        Sort by price
      </label>
      <select
      onChange={(e)=>setSortValue(e.target.value)}
        id="countries"
        className="bg-gray-50 mb-5 w-32 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="-1">Low to high</option>
        <option value="1">High to low</option>
      </select>

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
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Deleted
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
                    {name.slice(0, 15)}...
                  </th>
                  <td className="px-6 py-4">{seller_name}</td>
                  <td className="px-6 py-4">{sub_category}</td>
                  <td className="px-6 py-4">$ {price}</td>
                  <td className="px-6 py-4">{quantity}</td>

                  <td className="px-6 py-4">
                    <Link to={`/updatedProduct/${_id}`}>
                      <span className="text-green-500 cursor-pointer hover:bg-gray-100 border-none btn btn-sm bg-white btn-circle">
                        <CreateIcon></CreateIcon>
                      </span>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      onClick={() => handleDeleted(_id)}
                      className="text-red-500 cursor-pointer hover:bg-gray-100 border-none btn btn-sm bg-white btn-circle"
                    >
                      <DeleteIcon></DeleteIcon>
                    </span>
                  </td>
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

export default MyToys;
