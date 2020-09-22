import AxiosService from "./../commons/axiosService";
import { API_ENDPOINT } from "./../constant/index";
const url = "/users";

export const getListUsers = () => {
  return AxiosService.get(`${API_ENDPOINT}${url}`);
};

export const addUser = (body) => {
  return AxiosService.post(`${API_ENDPOINT}${url}`, body);
};
