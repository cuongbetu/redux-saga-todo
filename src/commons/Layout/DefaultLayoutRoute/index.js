import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
class DefaultLayoutRoute extends Component {
  render() {
    //const { component: YourComponent, name, path, exact } = this.props;
    const { isLogined, component: YourComponent, ...remainsProps } = this.props;
    return (
      <Route
        {...remainsProps}
        render={(props) => <YourComponent {...props} />}
      />
    );
  }
}

export default DefaultLayoutRoute;
