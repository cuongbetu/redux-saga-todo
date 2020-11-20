import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./style";
import { withStyles, Grid, MenuItem } from "@material-ui/core";
import * as modalActions from "../../actions/modal";
import * as taskAction from "../../actions/task";
import * as formName from "../../constant/form";
import renderTextField from "../../components/FormHelper/TextField/index";
import renderSelectField from "../../components/FormHelper/SelectField/index";
import PropTypes from "prop-types";
import validate from "./validate";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    let { taskActionCreators, taskEditing } = this.props;
    let { addTask, updateTask } = taskActionCreators;
    let { title, description, status } = data;
    if (taskEditing && taskEditing.id) {
      updateTask(title, description, status);
    } else {
      addTask(title, description);
    }
  };

  showSelectStatusField() {
    let result = null;
    let { taskEditing } = this.props;
    if (taskEditing && taskEditing.id) {
      result = (
        <Field id="status" name="status" component={renderSelectField}>
          <MenuItem value={1}>Ready</MenuItem>
          <MenuItem value={2}>In Progress</MenuItem>
          <MenuItem value={3}>Completed</MenuItem>
        </Field>
      );
    }
    return result;
  }

  render() {
    const {
      classes,
      modalActionCreators,
      handleSubmit,
      invalid,
      submitting,
    } = this.props;

    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.grid}
        >
          <Grid item md={12}>
            <Field
              id="title"
              name="title"
              component={renderTextField}
              label="Tên công việc"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              name="description"
              component={renderTextField}
              label="Chi tiết công việc"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item md={12} className={classes.selectStatus}>
            {this.showSelectStatusField()}
          </Grid>
          <Grid item md={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
              disabled={invalid || submitting}
            >
              Lưu lại
            </Button>
            <Button variant="contained" onClick={hideModal} color="secondary">
              Hủy bỏ
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalControl: state.modalReducer,
    taskEditing: state.taskReducer.taskEditing,
    initialValues: {
      title: state.taskReducer.taskEditing
        ? state.taskReducer.taskEditing.title
        : "",
      description: state.taskReducer.taskEditing
        ? state.taskReducer.taskEditing.description
        : "",
      status: state.taskReducer.taskEditing
        ? state.taskReducer.taskEditing.status
        : null,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    taskActionCreators: bindActionCreators(taskAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withConnectForm = reduxForm({ form: formName.TASK_MANAGEMENT, validate });

export default compose(
  withStyles(styles),
  withConnect,
  withConnectForm,
)(TaskForm);

TaskForm.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
};
