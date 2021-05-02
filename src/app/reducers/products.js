import ProductActionTypes from "../types/products.types";

const initialState = {
  products: [],
  isFetching: false,
  errorMessage: null,
};

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.SET_GET_PRODUCT_QUERY:
      return {
        ...state,
        isFetching: true,
      };
    case ProductActionTypes.GET_PRODUCTS_SUCCESS:
      console.log("momo", action.payload);
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };
    case ProductActionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ProductActionTypes.SET_GET_PRODUCT_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case ProductActionTypes.SET_GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case ProductActionTypes.SET_GET_PRODUCT_DETAILS_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default productsReducers;
