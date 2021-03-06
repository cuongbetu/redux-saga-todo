import { toast } from "react-toastify";
import * as userTypes from "./../constant/users";

const initialState = {
  listUsers: [],
  isLogined: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GET_LIST_USER_SUCCESS:
      let listUsers = [...action.payload.data];
      return {
        ...state,
        listUsers: listUsers,
      };

    case userTypes.GET_LIST_USER_FAIL:
      return {
        ...state,
        listUsers: [],
      };
    case userTypes.ADD_USER_SUCCESS:
      const cloneListUser = [...state.listUsers];
      cloneListUser.push(action.payload.user);
      toast.success("Đăng kí tài khoản thành công.");
      return {
        ...state,
        listUsers: cloneListUser,
      };
    case userTypes.ADD_USER_FAIL:
      toast.error("Đăng kí tài khoản thất bại");
      return {
        ...state,
      };
    case userTypes.LOG_IN_SUCCESS:
      toast.success("Đăng nhập thành công"); 
      localStorage.setItem('user',JSON.stringify(action.payload.data.data));
      return {
        ...state,
        isLogined: true,
      };
    case userTypes.LOG_IN_FAIL:
      toast.error(action.payload.message);
      return {
        ...state,
        isLogined : false
      }
    case userTypes.LOG_OUT:
      localStorage.removeItem('user');
      return {
        ...state,
        isLogined: false,
      };
    default:
      return state;
  }
};

export default reducer;
