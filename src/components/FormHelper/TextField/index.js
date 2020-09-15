import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import style from "./style";
const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export default withStyles(style)(renderTextField);
