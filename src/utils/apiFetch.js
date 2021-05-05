const axios = require("axios");
const store = require("../store/index");
const { signUpUrl, signInUrl, productsUrl, cartUrl, deleteCartItemUrl, productDetailsUrl } = require("../config");
const axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
};

export const signInUser = async (data) => {
  console.log("popo", data);
  try {
    let axiosResult = await axios.post(signInUrl, data, axiosConfig);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
  }
};

export const signUpUser = async (data) => {
  console.log(data);
  try {
    let axiosResult = await axios.post(signUpUrl, data, axiosConfig);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
  }
};

export const getProductsApi = async (query) => {
  // const { token } = store.getState().auth;
  // const newConfig = {
  //   headers: {
  //     "Content-Type": "application/json;charset=UTF-8",
  //     //   authorization: "bearer " + token,
  //   },
  // };
  try {
    let axiosResult = await axios.get(productsUrl, query);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
  }
};

export const setGetProductQueryApi = async (query) => {
  console.log("momo-apifetch", query);
  try {
    let axiosResult = await axios.get(productsUrl(query.gender, query.selectCatgory));
    console.log("momo-axios", axiosResult);
    return axiosResult && axiosResult.data;
  } catch (error) {
    throw error;
  }
};

export const setGetProductDetailsApi = async (productId) => {
  console.log("aaa", productId);
  try {
    let axiosResult = await axios.get(productDetailsUrl(productId));
    return axiosResult && axiosResult.data;
  } catch (error) {
    throw error;
  }
};

//--------------------

export const postApi = async (url, data) => {
  const { token } = store.getState().auth;
  const postObj = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: "bearer " + token,
    },
    data,
  };
  try {
    let axiosResult = await axios.post(url, postObj);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
  }
};

export const getApi = async (url) => {
  const { token } = store.getState().auth;
  const newConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: "bearer " + token,
    },
  };
  try {
    let axiosResult = await axios.get(url, newConfig);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
  }
};

export const deleteApi = async (url, data) => {
  const { token } = store.getState().auth;
  const deleteObj = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: "bearer " + token,
      params: data,
    },
    // data,
  };
  try {
    let axiosResult = await axios.delete(url, deleteObj);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
  }
};

//------------------CART_SECTION---------------------//
export const getCartItemsApi = async () => {
  const { token } = store.default.store.getState().auth;

  const newConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  };
  try {
    let axiosResult = await axios.get(cartUrl, newConfig);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
  }
};

export const addCartItemApi = async (data) => {
  console.log("bobo-data", data);
  const { token } = store.default.store.getState().auth;
  console.log("bobo", token);
  const postObj = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  };
  try {
    let axiosResult = await axios.post(cartUrl, data, postObj);
    console.log("momo-axios", axiosResult);
    return axiosResult && axiosResult.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCartItemApi = async (data) => {
  console.log("apiFetch", data);
  const { token } = store.default.store.getState().auth;
  console.log("bobo", token);
  const config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  };
  try {
    let axiosResult = await axios.delete(deleteCartItemUrl(data.itemId, data.size), config);
    // let axiosResult = await axios.delete(deleteCartItemUrl, config);

    return axiosResult && axiosResult.data;
  } catch (error) {
    console.log("xoxo-error", error);
    throw error;
  }
};

//------------------CART_SECTION---------------------//
