import ProductActionTypes from "../types/products.types";

export const setGetProductQuery = (query) => ({
  type: ProductActionTypes.SET_GET_PRODUCT_QUERY,
  payload: query,
});

export const getProductStart = (query) => ({
  type: ProductActionTypes.GET_PRODUCTS_START,
  payload: query,
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
