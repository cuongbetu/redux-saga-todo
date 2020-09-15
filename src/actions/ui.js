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
