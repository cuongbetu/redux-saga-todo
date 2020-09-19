import DashBoard from "../../../components/DashBoard/index";
import React, { Component } from "react";
import { Route } from "react-router-dom";
class AdminLayoutRoute extends Component {
  render() {
    //const { component: YourComponent, name, path, exact } = this.props;
    const { component: YourComponent, ...remainsProps } = this.props;
    return (
      <Route
        {...remainsProps}
        render={(props) => (
          <DashBoard {...remainsProps}>
            <YourComponent {...props} />
          </DashBoard>
        )}
      />
    );
  }
}

export default AdminLayoutRoute;
