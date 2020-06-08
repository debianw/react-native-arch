import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Center = ({ children }) => {
  return <View style={styles.root}>{children}</View>;
};

export default Center;
