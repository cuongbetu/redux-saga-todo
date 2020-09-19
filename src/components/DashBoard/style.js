const style = (theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  content: {
    width: "100%",
    padding: 10,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.standard,
      duration: theme.transitions.duration.standard,
    }),
  },
  shiftLeft: {
    marginLeft: -250,
    padding: 10,
    // transition: theme.transitions.create("margin", {
    //   easing: theme.transitions.easing.easeIn,
    //   duration: theme.transitions.duration.standard,
    // }),
  },
});

export default style;
