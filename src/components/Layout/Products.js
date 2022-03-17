import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=6")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="bg-gray-300 h-full ">
      <h4
        className="text-lg lg:pl-56 sm:pr-5 py-10 "
      >
        ALL PRODUCTS
      </h4>
      <ul className="block lg:grid lg:grid-cols-3 lg:gap-4 sm:mx-3 lg:mx-20 ">
        {products.map((product) => (
          <li   key={product.id}>
			  <div  className=" p-4  bg-white  m-6   rounded-lg py-10 sm:mx-8 text-base ">
			  <img src={product.image} alt="image" className=" flex align-center justify-center"/>
				  <p className="leading-8  flex">Tittle: {product.title}</p>
				  <p className="leading-8 ">Price: {product.price}</p>
				  <p className="leading-8">Category: {product.category}</p>
				  <p className="leading-8 flex justify-center ellipse">Description: {product.description} </p>
				  
			  </div>
          </li>
        ))}

        
      </ul>
    </div>
  );
  //  function fetchProductHander() {
  //     fetch('')
  //         .then(res=>res.json())
  //         .then(json=>
  //             setProduct(console.log(json)))
  // }
};
export default ProductData;
