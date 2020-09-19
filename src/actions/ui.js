import * as uiTypes from "./../constant/ui";

export const showGlobalLoading = () => {
  return {
    type: uiTypes.SHOW_GLOBAL_LOADING,
  };
};

export const hideGlobalLoading = () => {
  return {
    type: uiTypes.HIDE_GLOBAL_LOADING,
  };
};

export const toggleSideBar = (value) => {
  return {
    type: uiTypes.TOGGLE_SIDE_BAR,
    payload: {
      value,
    },
  };
};
