const axios = require("axios");
const store = require("../store/index");
const { signUpUrl, signInUrl, productsUrl } = require("../config");
const axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
};

export const signInUser = async (data) => {
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

export const getProductsApi = async () => {
  // const { token } = store.getState().auth;
  // const newConfig = {
  //   headers: {
  //     "Content-Type": "application/json;charset=UTF-8",
  //     //   authorization: "bearer " + token,
  //   },
  // };
  try {
    let axiosResult = await axios.get(productsUrl);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
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
