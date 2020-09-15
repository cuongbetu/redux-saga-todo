import React, { Component } from "react";
import { withStyles, TextField } from "@material-ui/core";
import styles from "./style";
import PropTypes from "prop-types";
class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <TextField
        label="Search"
        type="search"
        placeholder="Nhập tìm kiếm"
        onChange={handleChange}
        variant="outlined"
        color="primary"
        size="small"
        className={classes.search}
      />
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(SearchBox);
