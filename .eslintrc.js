module.exports = {
  root: true,
  extends: ["@react-native-community", "airbnb", "prettier", "prettier/react"],
  rules: {
    "react/prop-types": ["warn"],
    "react/jsx-filename-extension": ["off"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
