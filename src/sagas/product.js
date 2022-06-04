import ProductActionTypes from "../app/types/products.types";
const { all, call, fork, put, takeEvery } = require("redux-saga/effects");
const { getProductsApi, setGetProductQueryApi, setGetProductDetailsApi } = require("../utils/apiFetch");
const { getProductSuccess, getProductFailure } = require("../app/actions/product.action");

const setProductQueryRequest = async (payload) => {
  console.log("momo", payload);
  return await setGetProductQueryApi(payload)
    .then((data) => {
      return data;
    })
    .catch((err) => err);
};

const setProductDetailsRequest = async (payload) => {
  return await setGetProductDetailsApi(payload)
    .then((data) => {
      return data;
    })
    .catch((err) => err);
};

const getProducts3 = async (...props) => {
  console.log("momo", props);
  return await getProductsApi()
    .then((data) => {
      return data;
    })
    .catch((error) => error);
};

function* setGetProductQuery({ payload }) {
  console.log("momo-25", payload);
  try {
    console.log("asd");
    const products = yield call(setProductQueryRequest, payload);

    if (Number(products.status) === 1) {
      yield put(getProductSuccess(products.data));
    } else if (Number(products.status) === 0) {
      yield put(getProductFailure(products.message));
    } else {
      console.log("error-Error getting data from server");
      // alert("Error getting data from server");
    }
  } catch (error) {
    alert(`product.js line-35 ${error}`);
  }
}

function* getProducts2({ query }) {
  console.log("momo", query);
  try {
    const products = yield call(getProducts3);

    if (Number(products.status) === 1) {
      console.log("xoxoxox", products.data, products.status);
      yield put(getProductSuccess(products.data.products));
    } else if (Number(products.status) === 0) {
      yield put(getProductFailure(products.message));
    } else {
      alert("Error getting data from server");
    }
  } catch (error) {
    alert(`product.js line-28 ${error}`);
  }
}

function* setGetProductDetails2({ payload }) {
  console.log("aaa", payload);
  try {
    const productDetails = yield call(setProductDetailsRequest, payload);
    console.log("momo", productDetails);
  } catch (error) {}
}

export function* getProducts() {
  yield takeEvery(ProductActionTypes.GET_PRODUCTS_START, getProducts2);
}

export function* setGetProduct() {
  yield takeEvery(ProductActionTypes.SET_GET_PRODUCT_QUERY, setGetProductQuery);
}

export function* setGetProductDetails() {
  yield takeEvery(ProductActionTypes.SET_GET_PRODUCT_DETAILS_START, setGetProductDetails2);
}

export default function* rootSaga() {
  yield all([fork(getProducts), fork(setGetProduct), setGetProductDetails()]);
}
