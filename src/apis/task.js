import AxiosService from "./../commons/axiosService";
import { API_ENDPOINT_TASK } from "./../constant/index";
import qs from "query-string";

const url = "/tasks";

export const getListTask = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return AxiosService.get(`${API_ENDPOINT_TASK}${url}${queryParams}`);
};

export const addTask = (body) => {
  return AxiosService.post(`${API_ENDPOINT_TASK}${url}`, body);
};

export const editTask = (data, dataID) => {
  return AxiosService.put(`${API_ENDPOINT_TASK}${url}/${dataID}`, data);
};

export const deleteTask = (dataID) => {
  return AxiosService.delete(`${API_ENDPOINT_TASK}${url}/${dataID}`);
};
