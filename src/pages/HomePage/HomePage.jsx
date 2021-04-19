import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "src/components/Header/Header";
import HeaderTabs from "src/components/HeaderTabs/HeaderTabs";
import ProductList from "src/components/Product/ProductList/ProductList";
import Loader from "src/components/Loader/Loader";

import { getProductStart } from "../../app/actions/product.action";

const HomePage = ({ getProductStart, products }) => {
  console.log("popo-products", products);
  useEffect(() => {
    getProductStart();
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
        <div className="px-3 xl:px-0 md:px-0  mt-3">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProductStart: () => dispatch(getProductStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
