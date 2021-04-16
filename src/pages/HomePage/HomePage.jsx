import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "src/components/Header/Header";
import HeaderTabs from "src/components/HeaderTabs/HeaderTabs";
import ProductList from "src/components/Product/ProductList/ProductList";
import Loader from "src/components/Loader/Loader";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await axios.get("http://localhost:8000/api/v1/products");
    setProducts(result.data.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (products.length === 0) {
    return (
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <div className="mt-12">
        <HeaderTabs />
        {/* <div className="fixed z-10 w-full bg-white py-2">
          <ul className="flex items-center justify-between whitespace-nowrap overflow-x-scroll overflow-y-hidden">
            <li className="bg-white inline-block shadow-md px-2 py-2  rounded-md">
              <a className="text-black font-semiBold text-sm uppercase" href="#">
                T-Shirts
              </a>
            </li>
            <li>
              <a href="#">T-Shirts</a>
            </li>
            <li>
              <a href="#">T-Shirts</a>
            </li>
            <li>
              <a href="#">T-Shirts</a>
            </li>
            <li>
              <a href="#">T-Shirts</a>
            </li>
            <li>
              <a href="#">T-Shirts</a>
            </li>
          </ul>
        </div> */}
        <div className="px-3 xl:px-0 md:px-0  mt-3">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
