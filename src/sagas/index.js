/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { UserTypes } from "redux/user.redux";

/* ------------- Sagas ------------- */
import { loginRequest } from "./user.saga";
import { raiseError, resetError } from "./error.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    //authentication
    takeLatest(UserTypes.LOGIN_REQUEST, loginRequest),

    // Reset error before call api
    takeLatest([UserTypes.LOGIN_REQUEST], resetError),

    // Handling errors
    takeLatest([UserTypes.USER_FAILURE], raiseError),
  ]);
}
