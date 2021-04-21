import ProductActionTypes from "../types/products.types";

export const getProductStart = () => ({
  type: ProductActionTypes.GET_PRODUCTS_START,
});

export const getProductSuccess = function (products) {
  console.log("xoxxoxox", products);
  return {
    type: ProductActionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProductFailure = (error) => ({
  type: ProductActionTypes.GET_PRODUCTS_FAILURE,
  payload: error,
});
