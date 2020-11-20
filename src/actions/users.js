import * as userTypes from "../constant/users";

export const getListUser = () => {
  return {
    type: userTypes.GET_LIST_USER,
  };
};

export const getListUserSuccess = (data) => {
  return {
    type: userTypes.GET_LIST_USER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getListUserFail = (err) => {
  return {
    type: userTypes.GET_LIST_USER,
    payload: {
      err,
    },
  };
};

export const addUser = (username, password) => {
  return {
    type: userTypes.ADD_USER,
    payload: {
      username,
      password,
    },
  };
};

export const addUserSuccess = (user) => {
  return {
    type: userTypes.ADD_USER_SUCCESS,
    payload: {
      user,
    },
  };
};

export const addUserFail = (err) => {
  return {
    type: userTypes.ADD_USER_SUCCESS,
    payload: {
      err,
    },
  };
};

export const login = (data) => {
  return {
    type: userTypes.LOG_IN,
    payload: {
      data,
    },
  };
};

export const loginSuccess = (data) => {
  return {
    type: userTypes.LOG_IN_SUCCESS,
    payload: {
      data,
    },
  };
};

export const loginFail = (message) => {
  return {
    type: userTypes.LOG_IN_FAIL,
    payload: {
      message,
    },
  };
};

export const logout = () => {
  return {
    type: userTypes.LOG_OUT,
  };
};
