import React, { Component } from "react";
import style from "./style";
import { withStyles } from "@material-ui/core";
import Header from "././Header/index";
import SideBar from "././SideBar/index";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as uiActions from "./../../actions/ui";
import cn from "classnames";
import { Redirect } from "react-router-dom";
import { ReduxFormContext } from "redux-form";

class DashBoard extends Component {
  toggleDrawer = (value) => {
    let { uiActionCreators } = this.props;
    let { toggleSideBar } = uiActionCreators;
    toggleSideBar(value);
  };
  render() {
    const { children, classes, name, isSideBar, isLogined } = this.props;
    if (isLogined === false) {
      return <Redirect to="/" />;
    }
    return (
      <div className={classes.dashBoard}>
        <Header
          name={name}
          isSideBar={isSideBar}
          toggleDrawer={this.toggleDrawer}
        />
        <div className={classes.wrapper}>
          <div className={classes.sidebar}>
            <SideBar isSideBar={isSideBar} />
          </div>
          <div
            className={cn(classes.content, {
              [classes.shiftLeft]: isSideBar === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSideBar: state.uiReducer.isSideBar,
    isLogined: state.userReducer.isLogined,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(style))(DashBoard);
