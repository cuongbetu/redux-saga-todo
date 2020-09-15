const validate = (values) => {
  const error = {};
  if (!values.title) {
    error.title = "Tên công việc không được để trống !";
  } else {
    if (values.title.trim().length > 15) {
      error.title = " Bạn nhập quá kí tự cho phép !";
    }
  }

  if (!values.description) {
    error.description = "Chi tiết công việc không được để trống";
  }

  return error;
};

export default validate;
