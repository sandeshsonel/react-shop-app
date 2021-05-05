import CartActionTypes from "../app/types/cart.types";
const { all, call, fork, put, takeEvery } = require("redux-saga/effects");
const { getCartItemsApi, addCartItemApi, deleteCartItemApi } = require("../utils/apiFetch");
const {
  getCartItemSuccess,
  getCartItemFailed,
  removeCartItemSuccess,
  removeCartItemFailed,
  addCartItemSuccess,
  addCartItemFailed,
} = require("../app/actions/cart.action");

const getCartItemsRequest = async () => {
  return await getCartItemsApi()
    .then((data) => {
      return data;
    })
    .catch((err) => err);
};

const addCartItemRequest = async (payload) => {
  return await addCartItemApi(payload)
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
      yield put(getCartItemSuccess(cartItems.data));
    } else if (Number(cartItems.status === 0)) {
      yield put(getCartItemFailed(cartItems.message));
    }
  } catch (err) {
    console.log("zolo-err", err);
    alert("Cart Items Errror");
  }
}

function* addCartItem2({ payload }) {
  try {
    const cartItems = yield call(addCartItemRequest, payload);
    if (Number(cartItems.status) === 1) {
      yield put(addCartItemSuccess(cartItems.data));
    } else if (Number(cartItems.status) === 0) {
      yield put(addCartItemFailed(cartItems.message));
    }
  } catch (error) {}
}

function* removeCartItem2({ payload: { itemId, size } }) {
  console.log("xolo-payload", itemId, size);
  try {
    const cartItems = yield call(removeCartItemRequest, { itemId, size });
    if (Number(cartItems.status) === 1) {
      yield put(removeCartItemSuccess(cartItems.data));
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

export function* addCartItem() {
  yield takeEvery(CartActionTypes.ADD_ITEM_TO_CART_START, addCartItem2);
}

export function* removeCartItem() {
  yield takeEvery(CartActionTypes.REMOVE_ITEM_TO_CART_START, removeCartItem2);
}

export default function* rootSaga() {
  yield all([fork(getCartItems), fork(addCartItem), fork(removeCartItem)]);
}
