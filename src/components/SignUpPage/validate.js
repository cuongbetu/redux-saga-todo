const validate = (values) => {
  const error = {};
  if (!values.username) {
    error.username = "Tên tài khoản không được để trống !";
  } else {
    if (values.username.trim().length > 15) {
      error.username = " Bạn nhập quá kí tự cho phép !";
    }
  }

  if (!values.password) {
    error.password = "Mật khẩu không được để trống";
  }

  if (!values.re_password || values.re_password !== values.password) {
    error.re_password = "Xác nhận mật khẩu thất bại";
  }

  return error;
};

export default validate;
