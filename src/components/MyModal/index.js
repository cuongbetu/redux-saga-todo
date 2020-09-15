import React, { Component } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as modalActions from "../../actions/modal";
import styles from "./styles";
import { withStyles, Modal } from "@material-ui/core";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Clear";
class MyModal extends Component {
  render() {
    const { classes, modalControl, modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    const { showModal } = modalControl;
    return (
      <Modal open={showModal} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{modalControl.title}</span>
            <CloseIcon onClick={hideModal} className={classes.icon} />
          </div>
          <div className={classes.content}>{modalControl.component}</div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalControl: state.modalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(MyModal);

MyModal.propTypes = {
  classes: PropTypes.object,
  modalControl: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
    showModal: PropTypes.func,
  }),
};
