import React, { useState, useEffect } from "react";
import { isEqual } from "lodash";
import { connect } from "react-redux";
import HeaderTabs from "src/components/HeaderTabs/HeaderTabs";
import ProductList from "src/components/Product/ProductList/ProductList";
import Loader from "src/components/Loader/Loader";

import { getProductStart, setGetProductQuery } from "../../app/actions/product.action";
import BottomNavigationBar from "src/components/BottomNavigation/BottomNavigation";
import HeaderOption from "src/components/HeaderOption/HeaderOption";

const HomePage = ({ getProductStart, products, setGetProductQuery, isLoading }) => {
  const [query, setQuery] = useState({});
  const [productSort, setProductSort] = useState("freshness");
  const [fetch, setFetch] = useState(true);
  console.log("popo-products", products);

  useEffect(() => {
    if (Object.keys(query).length !== 0) {
      setGetProductQuery(query);
    }
    // const self = products;
    // setTimeout(
    //   (products) => {
    //     console.log("oyo-setTim", products);
    //     // if (pro.length === 0) {
    //     //   console.log("oyo-oyo-oyo", pro.length);
    //     //   setFetch(false);
    //     // }
    //   },

    //   self
    // );
    console.log("vevo", query);
  }, [query]);

  console.log("oyo", fetch);
  console.log("oyo-product-length", products.length);

  return (
    <div>
      <div className=" h-screen">
        <HeaderOption setQuery={setQuery} />

        {isLoading ? (
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Loader />
          </div>
        ) : products.length === 0 ? (
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <h1 className="">😌No result found😌</h1>
          </div>
        ) : (
          <div className="px-3 xl:px-0 md:px-0 lg:px-0 mt-28">
            <div className="text-center font-semiBold py-2 text-gray-500 text-sm">
              <span>{products.length} styles found</span>
            </div>
            <ProductList products={products} />
            <div className="fixed bottom-0 w-full max-w-2xl py-2 bg-white shadow-md">
              <div className="flex items-center space-x-3">
                <div className="w-full">
                  <select
                    disabled
                    onChange={(e) => setProductSort(e.target.value)}
                    className="w-full rounded-none cursor-pointer bg-white py-3 border-2 font-semiBold uppercase border-black"
                    name=""
                    id=""
                  >
                    <option selected disabled value="">
                      Sort
                    </option>
                    <option disabled value="">
                      Our favourites
                    </option>
                    <option disabled value="freshness">
                      What's new
                    </option>
                    <option value="pricedesc">Price high to low</option>
                    <option value="priceasc">Price low to high</option>
                  </select>
                </div>
                <div className="w-full">
                  <select disabled className="w-full rounded-none cursor-pointer bg-white py-3 border-2 font-semiBold uppercase border-black" name="" id="">
                    <option value="">Filter</option>
                    <option value="">Our favourites</option>
                    <option value="freshness">What's new</option>
                    <option value="pricedesc">Price high to low</option>
                    <option value="priceasc">Price low to high</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  isLoading: state.products.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getProductStart: (query) => dispatch(getProductStart(query)),
  setGetProductQuery: (query) => dispatch(setGetProductQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
