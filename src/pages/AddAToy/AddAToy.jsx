import React from "react";
import swal from 'sweetalert';
const AddAToy = () => {

    const handleAddProduct = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const seller_name = form.sellerName.value
        const seller_email = form.sellerEmail.value
        const sub_category = form.category.value
        const price= form.price.value
        const picture = form.photoURL.value
        const description = form.description.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        
        let category_id = ''

        if (sub_category=='Marvel') {
            category_id = '0'
        }
        if (sub_category=='Star Wars') {
            category_id = '1'
        }
        if (sub_category=='Transformers') {
            category_id = '2'
        }

        
        console.log(category_id);


        
        console.log(name,seller_name,seller_email,sub_category,picture,price,description,rating,quantity);
        const addNewProductsItemInformation = {name,seller_name,seller_email,sub_category,picture,price,description,rating,quantity,category_id};

        fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(addNewProductsItemInformation)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            swal({
                title: "Product Addedd!",
                text: "New Product has been added successfully!",
                icon: "success",
              });
        })
    }

  return (
    <div>
      <h1 className="text-xl text-center lg:my-10 my-5 lg:text-3xl text-white font-semibold">
        Add A Toys
      </h1>

      <div className="productFormContainer">
        <section className="bg-gradient-to-br rounded-lg from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add a new product
            </h2>
            <form onSubmit={handleAddProduct}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                    placeholder="Type product name"
                    required=""
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="sellerName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Seller Name
                  </label>
                  <input
                    type="text"
                    name="sellerName"
                    id="sellerName"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Seller Name"
                    required=""
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="sellerEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Seller Email
                  </label>
                  <input
                    type="email"
                    name="sellerEmail"
                    id="sellerEmail"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Seller Email"
                    required=""
                  />
                </div>
                
                
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    required
                    name="category"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    
                    <option required value="Marvel">Marvel</option>
                    <option required value="Star Wars">Star Wars</option>
                    <option required value="Transformers">Transformers</option>
                    
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="Price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="Price"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="12"
                    required=""
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="rating"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Rating"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Quantity"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="Quantity"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Rating"
                    required=""
                  />
                </div>

              
                <div className="sm:col-span-2">
                  <label
                    htmlFor="photoURL"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Photo Url
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    id="photoURL"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                    placeholder="Product Photo Url"
                    required=""
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows="8"
                    name="description"
                    className="block p-2.5 outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex hover:bg-gray-200 justify-center w-full bg-white items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Add product
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddAToy;
