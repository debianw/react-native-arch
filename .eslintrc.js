module.exports = {
  root: true,
  extends: ["@react-native-community", "airbnb", "prettier", "prettier/react"],
  rules: {
    "react/prop-types": ["warn"],
    "react/jsx-filename-extension": ["off"],
    "react/jsx-props-no-spreading": ["off"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
