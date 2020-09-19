import * as taskContant from "./../constant/task";
import { STATUSES } from "./../constant/index";
// Redux Thunk

// export const fetchListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchListTask());
//     taskApi
//       .getListTask()
//       .then((res) => {
//         return dispatch(fetchListTaskSuccess(res));
//       })
//       .catch((err) => {
//         return dispatch(fetchListTaskFail(err));
//       });
//   };
// };

export const fetchListTask = (params = {}) => {
  return {
    type: taskContant.FETCH_TASK,
    payload: {
      params,
    },
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskContant.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFail = (err) => {
  return {
    type: taskContant.FETCH_TASK_FAIL,
    payload: {
      err,
    },
  };
};

export const filterTask = (keyword) => {
  return {
    type: taskContant.FILTER_TASK,
    payload: {
      keyword,
    },
  };
};

export const addTask = (title, description) => {
  return {
    type: taskContant.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};

export const addTaskSuccess = (task) => {
  return {
    type: taskContant.ADD_TASK_SUCCESS,
    task,
  };
};

export const addTaskFail = (err) => {
  return {
    type: taskContant.ADD_TASK_FAIL,
    payload: {
      err,
    },
  };
};

export const editTask = (task) => {
  return {
    type: taskContant.EDIT_TASK,
    payload: {
      task,
    },
  };
};

export const updateTask = (title, description, status = STATUSES[0].value) => {
  return {
    type: taskContant.UPDATE_TASK,
    payload: {
      title,
      description,
      status,
    },
  };
};

export const updateTaskSuccess = (task) => {
  return {
    type: taskContant.UPDATE_TASK_SUCCESS,
    payload: { task },
  };
};

export const updateTaskFail = (err) => {
  return {
    type: taskContant.UPDATE_TASK_FAIL,
    payload: {
      err,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: taskContant.DELETE_TASK,
    payload: {
      id,
    },
  };
};

export const deleteTaskSuccess = (id) => {
  return {
    type: taskContant.DELETE_TASK_SUCCESS,
    payload: { id },
  };
};

export const deleteTaskFail = (err) => {
  return {
    type: taskContant.DELETE_TASK_FAIL,
    payload: {
      err,
    },
  };
};
