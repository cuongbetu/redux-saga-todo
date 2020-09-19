import React, { Component } from "react";
import style from "./style";
import { withStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { ADMIN_ROUTES } from "./../../../constant/index";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class SideBar extends Component {
  renderList = () => {
    const { classes } = this.props;
    let xhml = null;
    xhml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((route) => {
            return (
              <NavLink
                key={route.path}
                className={classes.navLink}
                activeClassName={classes.activeLink}
                exact={route.exact}
                to={route.path}
              >
                <ListItem button>{route.name}</ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhml;
  };

  render() {
    const { isSideBar, classes } = this.props;
    return (
      <Drawer
        open={isSideBar}
        variant="persistent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

export default withStyles(style)(SideBar);
