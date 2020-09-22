import {
  call,
  put,
  delay,
  takeLatest,
  takeEvery,
  select,
} from "redux-saga/effects";
import * as taskTypes from "./../constant/task";
import { getListTask, addTask, editTask, deleteTask } from "./../apis/task";
import { addUser, getListUsers } from "./../apis/users";
import {
  fetchListTaskSuccess,
  fetchListTaskFail,
  addTaskSuccess,
  addTaskFail,
  fetchListTask,
  updateTaskSuccess,
  updateTaskFail,
  deleteTaskSuccess,
  deleteTaskFail,
} from "./../actions/task";
import {
  addUserFail,
  addUserSuccess,
  getListUserFail,
  getListUserSuccess,
} from "./../actions/users";
import { showGlobalLoading, hideGlobalLoading } from "./../actions/ui";
import { hideModal } from "./../actions/modal";
import { STATUSES } from "../constant";
import * as userTypes from "./../constant/users";

function* watchFetchListTask(action) {
  yield put(showGlobalLoading());
  const { params } = action.payload;
  try {
    const resp = yield call(getListTask, params);
    const { data } = resp;
    yield put(fetchListTaskSuccess(data));
  } catch (error) {
    yield put(fetchListTaskFail(error));
  }
  yield delay(500);
  yield put(hideGlobalLoading());
}

function* filterTaskSaga(action) {
  yield delay(500);
  const { keyword } = action.payload;
  yield put(fetchListTask({ q: keyword }));
  // const list = yield select((state) => state.taskReducer.listTask);
  // const filteredTask = list.filter((task) => {
  //   return task.title
  //     .trim()
  //     .toLowerCase()
  //     .includes(keyword.trim().toLowerCase());
  // });
  // yield put(filterTaskSuccess(filteredTask));
}

function* addTaskSaga(action) {
  let { title, description } = action.payload;
  yield put(showGlobalLoading());
  try {
    const resp = yield call(addTask, {
      title,
      description,
      status: STATUSES[0].value,
    });
    let { data } = resp;
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } catch (error) {
    yield put(addTaskFail(error));
  }
  yield delay(300);
  yield put(hideGlobalLoading());
}

function* updateTaskSaga(action) {
  yield put(showGlobalLoading());
  let { title, description, status } = action.payload;
  let id = yield select((state) => state.taskReducer.taskEditing.id);
  try {
    let resp = yield call(editTask, { title, description, status }, id);
    let { data } = resp;
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } catch (error) {
    yield put(updateTaskFail(error));
  }
  yield delay(300);
  yield put(hideGlobalLoading());
}

function* deleteTaskSaga(action) {
  yield put(showGlobalLoading());
  try {
    yield call(deleteTask, action.payload.id);
    yield put(deleteTaskSuccess(action.payload.id));
  } catch (error) {
    yield put(deleteTaskFail(error));
  }
  yield put(hideGlobalLoading());
}

function* addUserSaga(action) {
  yield put(showGlobalLoading());
  let { username, password } = action.payload;
  try {
    const resp = yield call(addUser, { username, password });
    yield put(addUserSuccess(resp.data));
  } catch (error) {
    yield put(addUserFail(error));
  }
  yield delay(1000);
  yield put(hideGlobalLoading());
}

function* getListUsersSaga() {
  try {
    const resp = yield call(getListUsers);
    const { data } = resp;
    yield put(getListUserSuccess(data));
  } catch (error) {
    yield put(getListUserFail(error));
  }
}

function* rootSaga() {
  yield takeEvery(taskTypes.FETCH_TASK, watchFetchListTask);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeEvery(taskTypes.UPDATE_TASK, updateTaskSaga);
  yield takeEvery(taskTypes.DELETE_TASK, deleteTaskSaga);
  yield takeEvery(userTypes.ADD_USER, addUserSaga);
  yield takeEvery(userTypes.GET_LIST_USER, getListUsersSaga);
}

export default rootSaga;
