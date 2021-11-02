import { Action, AuthState } from "../types";

const intialState: AuthState = {
  login: {
    isLoading: false,
    error: "",
    dataLogin: null,
  },
};

const reducer = (state = intialState, { type }: Action) => {
  switch (type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        login: { ...state.login, isLoading: true, error: "" },
      };
    case "LOGIN_SUCCESS":
      return { ...state, login: { ...state.login, isLoading: false } };
    case "LOGIN_ERROR":
      return {
        ...state,
        login: { ...state.login, isLoading: false },
      };
    default:
      return state;
  }
};

export default reducer;
