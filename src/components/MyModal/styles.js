const styles = (theme) => ({
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    outline: "none",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: theme.color.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    padding: 10,
  },
  icon: {
    cursor: "pointer",
  },
  button: {
    marginRight: 10,
  },
});

export default styles;
