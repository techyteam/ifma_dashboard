import { call, put, takeLatest } from "redux-saga/effects";

import { loginRequest } from "../../network/user";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../utils/constants";


function *login(action) {
  try {
    const response = yield call(loginRequest, action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: LOGIN_FAILURE, payload: e });
  }
}

function *userSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default userSaga;
