import React, { Component } from "react";
import styles from "./style";
import { withStyles } from "@material-ui/core";
import { STATUSES } from "../../constant/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import * as taskAction from "../../actions/task";
import * as modalAction from "../../actions/modal";
import TaskForm from "../TaskForm";
import SearchBox from "../../components/SearchBox";
import TaskList from "../../components/TaskList/index";

class TaskBoard extends Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  showTaskBoard() {
    let result = null;
    const { taskList } = this.props;
    result = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          var listTaskFiltered = taskList.filter((task) => {
            return task.status === status.value;
          });
          return (
            <TaskList
              key={index}
              status={status}
              index={index}
              tasks={listTaskFiltered}
              onClickEdit={this.onClickEdit}
            />
          );
        })}
      </Grid>
    );
    return result;
  }

  // showTaskForm() {
  //   let result = null;
  //   let { modalControl } = this.props;
  //   result = <TaskForm open={modalControl} onClose={this.onCloseForm} />;
  //   return result;
  // }

  getValue = (e) => {
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    let { value } = e.target;
    filterTask(value);
  };

  showSearchBox = () => {
    let result = null;
    result = <SearchBox handleChange={this.getValue} />;
    return result;
  };

  onClickEdit = (task) => {
    const { taskActionCreators, modalActionCreators } = this.props;
    const { editTask } = taskActionCreators;
    editTask(task);
    let { openModal, changeTitle, changeContent } = modalActionCreators;
    openModal();
    changeTitle("Cập nhật công việc");
    changeContent(<TaskForm />);
  };

  onOpenForm = () => {
    let { modalActionCreators, taskActionCreators } = this.props;
    const { editTask } = taskActionCreators;
    editTask(null);
    let { openModal, changeTitle, changeContent } = modalActionCreators;
    openModal();
    changeTitle("Thêm mới công việc");
    changeContent(<TaskForm />);
  };

  onCloseForm = () => {
    let { modalActionCreators } = this.props;
    let { hideModal } = modalActionCreators;
    hideModal();
  };

  render() {
    let { classes } = this.props;

    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.onOpenForm}
        >
          Thêm công việc
          <AddIcon />
        </Button>
        {this.showSearchBox()}
        {this.showTaskBoard()}
        {/* {this.showTaskForm()} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskReducer.listTask,
    modalControl: state.modalReducer.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //getList: () => dispatch(taskAction.fetchListTask()),
    taskActionCreators: bindActionCreators(taskAction, dispatch),
    modalActionCreators: bindActionCreators(modalAction, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard),
);

TaskBoard.propTypes = {
  classes: PropTypes.object,
  getList: PropTypes.shape({
    fetchListTask: PropTypes.func,
  }),
  //getList: PropTypes.func,
};
