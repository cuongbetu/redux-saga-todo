import * as uiTypes from "./../constant/ui";

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case uiTypes.SHOW_GLOBAL_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case uiTypes.HIDE_GLOBAL_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
