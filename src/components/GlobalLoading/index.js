import React, { Component } from "react";
import styles from "./style";
import { withStyles } from "@material-ui/core";
import loadingIcon from "./../../assets/images/loading.gif";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as uiActions from "./../../actions/ui";
class GlobalLoading extends Component {
  render() {
    const { classes, isLoading } = this.props;
    let xtml = null;
    if (isLoading) {
      return (
        <div className={classes.globalLoading}>
          <img src={loadingIcon} alt="Loading" className={classes.icon} />
        </div>
      );
    }
    return xtml;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return { isLoading: state.uiReducer.isLoading };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    uiAction: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
