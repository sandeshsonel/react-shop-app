import CartActionTypes from "../app/types/cart.types";
const { all, call, fork, put, takeEvery } = require("redux-saga/effects");
const { getCartItemsApi, deleteCartItemApi } = require("../utils/apiFetch");
const { getCartItemSuccess, getCartItemFailed, removeCartItemSuccess, removeCartItemFailed } = require("../app/actions/cart.action");

const getCartItemsRequest = async () => {
  return await getCartItemsApi()
    .then((data) => {
      return data;
    })
    .catch((err) => err);
};

const removeCartItemRequest = async (payload) => {
  console.log("zolo", payload);
  return await deleteCartItemApi(payload)
    .then((data) => {
      return data;
    })
    .catch((err) => err);
};

function* getCartItems2() {
  try {
    const cartItems = yield call(getCartItemsRequest);
    console.log("momo", cartItems);
    if (Number(cartItems.status) === 1) {
      yield put(getCartItemSuccess(cartItems.data[0].items));
    } else if (Number(cartItems.status === 0)) {
      yield put(getCartItemFailed(cartItems.message));
    }
  } catch (err) {
    alert("Cart Items Errror");
  }
}

function* removeCartItem2({ payload }) {
  console.log("xolo-payload", payload);
  try {
    const cartItems = yield call(removeCartItemRequest, payload);
    if (Number(cartItems.status) === 1) {
      yield put(removeCartItemSuccess(cartItems.data[0].items));
    } else if (Number(cartItems.status === 0)) {
      yield put(removeCartItemFailed(cartItems.message));
    }
  } catch (error) {
    console.log("error", error);
    alert("Remove Cart Item Error");
  }
}

export function* getCartItems() {
  yield takeEvery(CartActionTypes.GET_CART_ITEM_START, getCartItems2);
}

export function* removeCartItem() {
  yield takeEvery(CartActionTypes.REMOVE_ITEM_TO_CART_START, removeCartItem2);
}

export default function* rootSaga() {
  yield all([fork(getCartItems), fork(removeCartItem)]);
}
