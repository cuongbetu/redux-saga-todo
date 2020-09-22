import { combineReducers } from "redux";
import taskReducer from "./task";
import uiReducer from "./ui";
import modalReducer from "./modal";
import userReducer from "./users";
import { reducer as formReducer } from "redux-form";

const mainReducer = combineReducers({
  taskReducer,
  uiReducer,
  modalReducer,
  userReducer,
  form: formReducer,
});

export default mainReducer;
