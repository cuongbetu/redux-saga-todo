import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import styles from "./style";
import { withStyles } from "@material-ui/core";
import theme from "../../commons/theme";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from "react-toastify";
import GlobalLoading from "./../../components/GlobalLoading/index";
import "react-toastify/dist/ReactToastify.css";
import MyModal from "./../../components/MyModal/index";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ADMIN_ROUTES } from "./../../constant/index";
import AdminLayoutRoute from "./../../commons/Layout/AdminLayoutRoute/index";
import CssBaseline from "@material-ui/core/CssBaseline";

const store = configureStore();
class App extends Component {
  showAdminRoute() {
    let xhml = null;
    xhml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          name={route.name}
          component={route.component}
          exact={route.exact}
        />
      );
    });
    return xhml;
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <ToastContainer autoClose={3000} />
            <GlobalLoading />
            <MyModal />
            <Switch>{this.showAdminRoute()}</Switch>
            <CssBaseline />
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
