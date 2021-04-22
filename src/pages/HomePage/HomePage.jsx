import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import HeaderTabs from "src/components/HeaderTabs/HeaderTabs";
import ProductList from "src/components/Product/ProductList/ProductList";
import Loader from "src/components/Loader/Loader";

import { getProductStart } from "../../app/actions/product.action";
import BottomNavigationBar from "src/components/BottomNavigation/BottomNavigation";
import HeaderOption from "src/components/HeaderOption/HeaderOption";

const HomePage = ({ getProductStart, products }) => {
  const [query, setQuery] = React.useState({});
  console.log("popo-products", products);
  useEffect(() => {
    if (products.length === 0) {
      getProductStart();
    }
  }, []);

  // if (products.length === 0) {
  //   return (
  //     <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
  //       <Loader />
  //     </div>
  //   );
  // }

  console.log("xoxo-parent", query);
  return (
    <div>
      <div className="mt-16">
        <HeaderOption setQuery={setQuery} />
        {/* <HeaderTabs /> */}
        <div className="px-3 xl:px-0 md:px-0  mt-3">
          <ProductList products={products} />
        </div>
      </div>
      {/* <BottomNavigationBar /> */}
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
