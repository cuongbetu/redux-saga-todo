import * as modalTypes from "../constant/modal";

const initialState = {
  showModal: false,
  component: null,
  title: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.OPEN_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case modalTypes.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        title: null,
        component: null,
      };
    case modalTypes.CHANGE_MODAL_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case modalTypes.CHANGE_MODAL_CONTENT:
      return {
        ...state,
        component: action.payload.component,
      };
    default:
      return state;
  }
};

export default reducer;
