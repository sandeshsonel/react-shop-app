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

//-----------
export const setGetProductDetailsStart = (productId) => ({
  type: ProductActionTypes.SET_GET_PRODUCT_DETAILS,
  payload: productId,
});
export const setGetProductSuccess = (data) => ({
  type: ProductActionTypes.SET_GET_PRODUCT_DETAILS_SUCCESS,
  payload: data,
});
export const setGetProductFailed = (errorMsg) => ({
  type: ProductActionTypes.SET_GET_PRODUCT_DETAILS_FAILED,
  payload: errorMsg,
});

//------------
export const setProductSeachQuery = (query) => ({
  type: ProductActionTypes.SET_PRODUCT_SEARCH_QUERY,
  payload: query,
});
