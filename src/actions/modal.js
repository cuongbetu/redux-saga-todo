import * as modalTypes from "./../constant/modal";

export const openModal = () => {
  return {
    type: modalTypes.OPEN_MODAL,
  };
};

export const hideModal = () => {
  return {
    type: modalTypes.HIDE_MODAL,
  };
};

export const changeTitle = (title) => {
  return {
    type: modalTypes.CHANGE_MODAL_TITLE,
    payload: {
      title,
    },
  };
};

export const changeContent = (component) => {
  return {
    type: modalTypes.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    },
  };
};
