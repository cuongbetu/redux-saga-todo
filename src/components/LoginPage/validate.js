const validate = (values) => {
  const error = {};
  if (!values.username) {
    error.username = "Vui lòng nhập username !";
  } else {
    if (values.username.trim().length > 15) {
      error.username = " Bạn nhập quá kí tự cho phép !";
    }
  }

  if (!values.password) {
    error.password = "Mật khẩu không được để trống";
  }

  return error;
};

export default validate;
