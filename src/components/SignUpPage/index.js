import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import * as formName from "../../constant/form";
import renderTextField from "../../components/FormHelper/TextField";
import validate from "./validate";
import * as userActions from "../../actions/users";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import { FormControlLabel, withStyles } from "@material-ui/core";
import styles from "./style";
import { CheckBox } from "@material-ui/icons";
import { Link } from "react-router-dom";
class SignUpPage extends Component {
  handleSubmitForm = (data) => {
    const { userActionCreators } = this.props;
    const { addUser } = userActionCreators;
    let { username, password } = data;
    addUser(username, password);
  };
  render() {
    const { classes, invalid, submitting, handleSubmit } = this.props;
    return (
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Create new account to login
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
              <Field
                id="re_password"
                name="re_password"
                component={renderTextField}
                label="Reconfirm password"
                fullWidth
                type="password"
              />
              <FormControlLabel
                control={<CheckBox value="agree" />}
                label="I have been reading privacy policies."
                className={classes.check_box}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
                fullWidth
                disabled={invalid || submitting}
              >
                Sign up
              </Button>
              <div className={classes.sign_up}>
                <Link to="/login">Đã có tài khoản</Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
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
)(SignUpPage);
