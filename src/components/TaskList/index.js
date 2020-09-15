import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styles from "./style";
import TaskItem from "../TaskItem";

class TaskList extends Component {
  render() {
    let { tasks, classes, status, index, onClickEdit } = this.props;
    return (
      <Grid item xs={12} md={4} key={index}>
        <div className={classes.taskboard}>{status.label}</div>
        <div className={classes.listTask}>
          {tasks.map((task, index) => {
            return (
              <TaskItem
                task={task}
                status={status.label}
                key={index}
                index={index}
                onClickEdit={onClickEdit}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
