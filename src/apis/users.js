import AxiosService from "./../commons/axiosService";
import { API_ENDPOINT_TASK, HEADER, API_ENDPOINT_LOGIN } from "./../constant/index";
const url = "/users";

export const addUser = (body) => {
  return AxiosService.post(`${API_ENDPOINT_TASK}${url}`, body);
};

export const login = (body) => {
  return AxiosService.postLogin(API_ENDPOINT_LOGIN,body,HEADER  
  );
};
