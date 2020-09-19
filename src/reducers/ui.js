import * as uiTypes from "./../constant/ui";

const initialState = {
  isLoading: false,
  isSideBar: false,
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
    case uiTypes.TOGGLE_SIDE_BAR:
      return {
        ...state,
        isSideBar: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducer;
