import { all } from "redux-saga/effects";

import authSaga from "./auth";
import productSaga from "./product";
import cartSaga from "./cart.saga";

export default function* rootSaga(getState) {
  yield all([authSaga(), productSaga(), cartSaga()]);
}
