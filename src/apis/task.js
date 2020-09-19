import AxiosService from "./../commons/axiosService";
import { API_ENDPOINT } from "./../constant/index";
import qs from "query-string";

const url = "/tasks";

export const getListTask = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return AxiosService.get(`${API_ENDPOINT}${url}${queryParams}`);
};

export const addTask = (body) => {
  return AxiosService.post(`${API_ENDPOINT}${url}`, body);
};

export const editTask = (data, dataID) => {
  return AxiosService.put(`${API_ENDPOINT}${url}/${dataID}`, data);
};

export const deleteTask = (dataID) => {
  return AxiosService.delete(`${API_ENDPOINT}${url}/${dataID}`);
};
