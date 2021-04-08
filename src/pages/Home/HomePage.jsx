import React from "react";
import Header from "src/components/Header/Header";
import HeaderTabs from "src/components/HeaderTabs/HeaderTabs";
import ProductList from "src/components/Product/ProductList/ProductList";

const HomePage = () => {
  return (
    <div>
      <div className="mt-14 px-3">
        <div className="flex items-center space-x-2">
          <div className="w-full">
            <select className="py-2 px-2 uppercase font-semibold text-sm bg-white w-full border-2 border-black outline-none rounded-md" name="" id="">
              <option value="">Shirts</option>
              <option value="">T-Shirts</option>
              <option value="">Shirts</option>
            </select>
          </div>
          <div className="w-full">
            <select className="py-2 px-2 uppercase font-semibold text-sm bg-white w-full border-2 border-black outline-none rounded-md" name="" id="">
              <option value="">Mens</option>
              <option value="">Women</option>
            </select>
          </div>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
