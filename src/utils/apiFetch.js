const axios = require("axios");
const store = require("../store/index");
const { signUpUrl, signInUrl, productsUrl, cartUrl, deleteCartItemUrl } = require("../config");
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
    },
    data,
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
  const authState = store.default.store.getState().auth;
  console.log("token", authState.isLogin);
  const userData = localStorage.getItem("userData");
  console.log("token-local", JSON.parse(userData));
  const newConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODI0OWU1YWM5YmM1MGJkODEyYmU2ZSIsImlhdCI6MTYxOTM0OTIzNywiZXhwIjoxNjI3MTI1MjM3fQ.l8JmIC4A7ka11TQQNu4E2HZxj66WdtEoKkQHS5P8x3s",
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
  try {
    let axiosResult = await axios.post(cartUrl, data);
    console.log("momo-axios", axiosResult);
    return axiosResult && axiosResult.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCartItemApi = async (data) => {
  console.log("apiFetch", data);
  const newConfig = {
    headers: {
      Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwO…TIxfQ.yuKgRNDdmqARsJhh5C51nF6YTIClVYRfahYWFYIrC6E",
      params: data,
    },
  };
  try {
    let axiosResult = await axios.delete("http://localhost:8000/api/v1/cart", {
      headers: {
        Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwO…TIxfQ.yuKgRNDdmqARsJhh5C51nF6YTIClVYRfahYWFYIrC6E",
      },
      data: {
        source: data,
      },
    });
    return axiosResult && axiosResult.data;
  } catch (error) {
    throw error;
  }
};

//------------------CART_SECTION---------------------//
