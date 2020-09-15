import { toast } from "react-toastify";

export const toastError = (error) => {
  let result = null;
  result = toast.error(error);
  return result;
};

export const toastSuccess = (message) => {
  let result = null;
  result = toast.info(message);
  return result;
};
