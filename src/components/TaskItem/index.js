import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import styles from "./style";
class TaskItem extends Component {
  render() {
    let { index, task, classes, status, onClickEdit } = this.props;
    return (
      <Card key={index} className={classes.card}>
        <CardContent>
          <Grid container justify="space-evenly">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status}
            </Grid>
          </Grid>
          <Typography component="h2">{task.description}</Typography>
        </CardContent>
        <CardActions className={classes.cartAction}>
          <Fab
            color="primary"
            aria-label="edit"
            size="small"
            onClick={() => onClickEdit(task)}
          >
            <Icon fontSize="small">edit</Icon>
          </Fab>
          <Fab color="secondary" aria-label="delete" size="small">
            <Icon fontSize="small">delete</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
