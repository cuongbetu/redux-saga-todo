module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  rules: {
    semi: 1,
    //quotes: [1, "single"],
    "react/prop-types": 1,
    "react/jsx-max-props-per-line": 0,
  },
};
