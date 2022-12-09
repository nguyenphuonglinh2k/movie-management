import { call, put } from "redux-saga/effects";
import UserActions from "redux/user.redux";

import Cookies from "js-cookie";
import { AppConstant } from "const";
import { UserService } from "services";

export function* loginRequest(action) {
  try {
    const { data } = action;
    let response = yield call(UserService.login, data);
    if (response.status === 200) {
      let responseData = response.data;
      Cookies.set(AppConstant.KEY_TOKEN, JSON.stringify(responseData), {
        expires: AppConstant.EXPIRES_TOKEN,
      });
      yield put(UserActions.userSuccess());
    } else {
      yield put(UserActions.userFailure(response));
    }
  } catch (error) {
    yield put(UserActions.userFailure(error.message));
  }
}
