import ProductActionTypes from "../app/types/products.types";
const { all, call, fork, put, takeEvery } = require("redux-saga/effects");
const { getProductsApi } = require("../utils/apiFetch");
const { getProductSuccess, getProductFailure } = require("../app/actions/product.action");

const getProducts3 = async () => {
  return await getProductsApi()
    .then((data) => {
      return data;
    })
    .catch((error) => error);
};

function* getProducts2() {
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
    alert(error);
  }
}

export function* getProducts() {
  yield takeEvery(ProductActionTypes.GET_PRODUCTS_START, getProducts2);
}

export default function* rootSaga() {
  yield all([fork(getProducts)]);
}
