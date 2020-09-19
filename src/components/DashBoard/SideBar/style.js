const style = (theme) => ({
  list: {
    width: 250,
  },
  drawer: {
    height: "100%",
    zIndex: 10,
  },
  drawerPaper: {
    height: "100%",
    position: "relative",
  },
  navLink: {
    textDecoration: "none",
    color: "black",
    fontSize: 20,
  },
  activeLink: {
    "&>div": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
});

export default style;
