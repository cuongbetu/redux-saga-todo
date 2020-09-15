import * as taskContant from "../constant/task";
import { toastError, toastSuccess } from "./../commons/helpers/toastHelper";

const initialState = {
  listTask: [],
  taskEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskContant.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case taskContant.FETCH_TASK_SUCCESS:
      const { data } = action.payload;
      toastSuccess("Welcome to my project");
      return {
        ...state,
        listTask: data,
      };
    case taskContant.FETCH_TASK_FAIL:
      let { err } = action.payload;
      toastError(err.message);
      return {
        ...state,
        listTask: [],
      };
    case taskContant.ADD_TASK_SUCCESS:
      const { task } = action;
      state.listTask.unshift(task);
      toastSuccess("Thêm công việc mới thành công");
      return state;
    case taskContant.ADD_TASK_FAIL:
      toastError("Thêm mới công việc thất bại");
      return state;

    case taskContant.EDIT_TASK:
      return { ...state, taskEditing: action.payload.task };

    case taskContant.UPDATE_TASK_SUCCESS:
      const { listTask } = state;
      const idEdit = listTask.findIndex(
        (item) => item.id === action.payload.task.id,
      );
      if (idEdit !== -1) {
        listTask.splice(idEdit, 1, action.payload.task);
      }
      return { ...state, listTask: listTask };
    case taskContant.UPDATE_TASK_FAIL:
      toastError("Cập nhật công việc thất bại");
      return state;
    default:
      return state;
  }
};

export default reducer;
