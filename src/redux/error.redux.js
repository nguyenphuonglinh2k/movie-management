import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  resetError: [],
  failure: ["error", "status"]
});

export const ErrorTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  error: null,
  status: null
};

/* ------------- Reducers ------------- */
export const raise = (state, action) => ({ ...state, ...action });
export const reset = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FAILURE]: raise,
  [Types.RESET_ERROR]: reset
});
