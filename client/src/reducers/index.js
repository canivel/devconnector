import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";

export default combineReducers({
  form: reducerForm
});
