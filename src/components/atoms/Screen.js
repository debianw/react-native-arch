import React from "react";
import { SafeAreaView, View, StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
})

const Screen = ({ safe, children, style }) => {
  const Container = safe ? SafeAreaView : View;
  return <Container style={[styles.container, style]}>{children}</Container>;
};

Screen.defaultProps = {
  safe: true,
};

export default Screen;
