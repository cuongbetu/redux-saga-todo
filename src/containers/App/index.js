import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import styles from "./style";
import { withStyles } from "@material-ui/core";
import TaskBoard from "../TaskBoard";
import theme from "../../commons/theme";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from "react-toastify";
import GlobalLoading from "./../../components/GlobalLoading/index";
import "react-toastify/dist/ReactToastify.css";
import MyModal from "./../../components/MyModal/index";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer autoClose={3000} />
          <GlobalLoading />
          <MyModal />
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
