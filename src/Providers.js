import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import envoyTheme from "./config/theme/envoy";

const Providers = ({ children }) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={envoyTheme}>{children}</ThemeProvider>
    </SafeAreaProvider>
  );
};

export default Providers;
