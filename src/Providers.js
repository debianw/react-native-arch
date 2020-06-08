import React from "react";
import { ThemeProvider } from "react-native-elements";
import envoyTheme from "./config/theme/envoy";

const Providers = ({ children }) => {
  return <ThemeProvider theme={envoyTheme}>{children}</ThemeProvider>;
};

export default Providers;
