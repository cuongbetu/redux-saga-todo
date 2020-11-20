import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import styles from "./style";
import { Link,Redirect } from "react-router-dom";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as formName from "../../constant/form";
import renderTextField from "../../components/FormHelper/TextField";
import validate from "./validate";
import * as userActions from "../../actions/users";
class LoginPage extends Component {


  handleSubmitForm = (data) => {
    const { userActionCreators } = this.props;
    const { login } = userActionCreators;
    login(data);
  };
  
 
  render() {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user)
    {
      return <Redirect to= "/admin"/>
    }
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
              Sign In
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
                <Link className={classes.sign_up_link} to="/sign-up">Sign Up</Link>
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
