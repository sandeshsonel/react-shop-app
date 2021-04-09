import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";
import Loader from "src/components/Loader/Loader";

import productDummy from "../../../assets/data/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await axios.get("http://localhost:8000/api/v1/products");
    setProducts(result.data.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  // if (products.length === 0) {
  //   return (
  //     <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <div className="mt-2 xl:mt-4">
      <div className="grid grid-cols-2 gap-3 xl:grid xl:grid-cols-3 xl:gap-4 ">
        {productDummy.map((product) => (
          <Link to={`/productDetails/${product.gender}/${product.category}/${product.productName}/${product._id}`}>
            <div className="cursor-pointer">
              <div className="relative">
                <img
                  src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg"
                  alt=""
                />
                <div className="absolute bottom-0 right-0 mr-2 mb-2 bg-white px-1 py-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 512 512">
                    <title>Heart</title>
                    <path
                      d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-1">
                <h1 className="font-semiBold text-sm">{product.productName}</h1>
                <p className="text-sm text-gray-500 break-words overflow-ellipsis">{product.description}</p>
                <div className="text-sm space-x-1">
                  <span className="text-sm font-bold">Rs. {Math.floor(product.price - (product.price * product.priceDiscount) / 100)}</span>
                  <span className="line-through text-gray-500">{product.price}</span>
                  <span className="text-red-500">{`(${product.priceDiscount}) % OFF`}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
