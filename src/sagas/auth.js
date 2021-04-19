const { all, call, fork, put, takeEvery } = require("redux-saga/effects");
const AuthActionTypes = require("../app/types/auth.types");
const { signUpUser, signInUser } = require("../utils/apiFetch");

const signUpUserRequest = async (data) => {
  console.log(data);
  return await signUpUser(data)
    .then((authUser) => authUser)
    .catch((err) => console.log(err));
};

const signInUserRequest = async (data) => {
  console.log("popo", data);
  return await signInUser(data)
    .then((data) => data)
    .catch((err) => console.log(err));
};

function* signInUserFun({ payload }) {
  console.log("payload", payload);
  try {
    const signInData = yield call(signInUserRequest, payload);

    if (Number(signInData.status) === 1) {
      var expireDate = new Date();
      expireDate.setHours(expireDate.getHours() + 1);
      const saveUserData = {
        token: signInData.token,
        fullName: signInData.fullName,
        email: signInData.email,
        expireDate,
      };
      localStorage.setItem("userData", JSON.stringify(saveUserData));
      //   yield put(setUserData(saveUserData));
    }
  } catch (error) {}
}

function* signUpUserFun({ payload }) {
  try {
    const signUpUser = yield call(signUpUserRequest, payload);
    if (Number(signUpUser.status) === 1) {
      var expireDate = new Date();
      expireDate.setHours(expireDate.getHours() + 1);
      const saveUserData = {
        token: signUpUser.token,
        fullName: signUpUser.fullName,
        email: signUpUser.email,
        role: signUpUser.role,
        expireDate,
      };
      localStorage.setItem("userData", JSON.stringify(saveUserData));
      //   yield put(setUserData(saveUserData));
    } else if (Number(signUpUser.status) === 0) {
      alert(signUpUser.message);
    } else {
      alert("error creating account");
    }
  } catch (error) {
    alert(error);
    // yield put(showAuthMessage(error));
  }
}

export function* createUserAccount() {
  yield takeEvery(AuthActionTypes.default.SIGN_UP_USER, signUpUserFun);
}

export function* signInUserAccount() {
  yield takeEvery(AuthActionTypes.default.SIGN_IN_USER, signInUserFun);
}

export default function* rootSaga() {
  yield all([fork(createUserAccount), fork(signInUserAccount)]);
}
