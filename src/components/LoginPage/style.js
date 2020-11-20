import Background from "./../../assets/images/login-bg.jpg";
const style = () => ({
  wrapper: {
    backgroundImage: `url(${Background})`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
  },
  card: {
    minWidth: 400,
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
  content: {
    padding: 40,
  },
  title: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    color: "#000"
  },
  button: {
    marginTop: 20,
  },
  sign_up : {
    marginTop: 10,
    textAlign: "center",
  },
  sign_up_link: {
    color: "#000",
    textDecoration: "none"
  },
});

export default style;
