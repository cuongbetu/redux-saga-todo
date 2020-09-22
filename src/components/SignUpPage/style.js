import Background from "./../../assets/images/login-bg.jpg";
const style = () => ({
  wrapper: {
    backgroundImage: `url(${Background})`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
  },
  card: {
    maxWidth: 400,
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
  content: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
  },
  sign_up: {
    marginTop: 10,
    textAlign: "center",
  },
  check_box: {
    marginTop: 15,
  },
});

export default style;
