import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import styles from "./style";
import { Link } from "react-router-dom";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as formName from "../../constant/form";
import renderTextField from "../../components/FormHelper/TextField";
import validate from "./validate";
import * as userActions from "../../actions/users";
import { toast } from "react-toastify";
class LoginPage extends Component {
  componentDidMount() {
    const { userActionCreators } = this.props;
    const { getListUser } = userActionCreators;
    getListUser();
  }

  handleSubmitForm = (data) => {
    const err = null;
    const { listUsers, history, userActionCreators } = this.props;
    const { logInSuccess } = userActionCreators;
    let { username, password } = data;
    listUsers.forEach((element) => {
      if (element.username === username && element.password === password) {
        history.push("/admin");
        logInSuccess();
      } else {
        return toast.error(
          "Đăng nhập thất bại,tài khoản hoặc mật khẩu không đúng.",
        );
      }
    });
  };
  render() {
    const { classes, handleSubmit, invalid, submitting } = this.props;
    return (
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Login to continue
            </Typography>
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
              <Field
                id="username"
                name="username"
                component={renderTextField}
                label="User Name"
                fullWidth
              />
              <Field
                id="password"
                name="password"
                component={renderTextField}
                label="Password"
                fullWidth
                type="password"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
                fullWidth
                disabled={invalid || submitting}
              >
                Login
              </Button>
              <div className={classes.sign_up}>
                <Link to="/sign-up">Create new account</Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUsers: state.userReducer.listUsers,
    isLogined: state.userReducer.isLogined,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionCreators: bindActionCreators(userActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withConnectForm = reduxForm({ form: formName.USERS, validate });

export default compose(
  withStyles(styles),
  withConnect,
  withConnectForm,
)(LoginPage);
