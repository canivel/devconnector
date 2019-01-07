import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  form: reducerForm,
  auth: authReducer
});
