import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) => ({
  container: {
    flex: 1,
  },
  dark: {
    backgroundColor: theme.colors.primary,
  },
  light: {
    backgroundColor: theme.colors.white,
  },
});

const Screen = ({ safe, children, style, dark = false }) => {
  const { styles, theme } = useStyles(makeStyles);
  const Container = safe ? SafeAreaView : View;
  const backgroundStyles = dark ? styles.dark : styles.light;

  return (
    <>
      <StatusBar
        barStyle={dark ? "light-content" : "dark-content"}
        backgroundColor={dark ? theme.colors.primary : theme.colors.white}
      />
      <Container style={[styles.container, backgroundStyles, style]}>
        {children}
      </Container>
    </>
  );
};

Screen.defaultProps = {
  safe: true,
};

export default Screen;
