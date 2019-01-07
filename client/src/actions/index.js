import api from "../apis/local";
import { SIGN_IN, REGISTER, SIGN_OUT } from "./types";
import history from "../history";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const registerNewAccount = formValues => {
  return async dispatch => {
    const response = await api.post("/api/users/register", formValues);

    dispatch({ type: REGISTER, payload: response.data });
    history.push("/");
  };
};
