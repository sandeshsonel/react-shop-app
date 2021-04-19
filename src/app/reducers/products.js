import ProductActionTypes from "../types/products.types";

const initialState = {
  products: [],
  isFetching: false,
  errorMessage: null,
};

const productsReducers = (state = initialState, action) => {
  switch (action.types) {
    case ProductActionTypes.GET_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ProductActionTypes.GET_PRODUCTS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        products: [...state.products, action.payload],
        isFetching: false,
      };
    case ProductActionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducers;
