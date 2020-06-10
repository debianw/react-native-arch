import React from "react";
import PropTypes from "prop-types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView, View, ViewPropTypes, StatusBar } from "react-native";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) => ({
  root: {
    flex: 1,
  },
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

const Screen = ({
  safe,
  children,
  rootStyle,
  containerStyle,
  dark,
  statusBarDark,
  keyboardAware,
}) => {
  const { styles, theme } = useStyles(makeStyles);
  const RootContainer = keyboardAware ? KeyboardAwareScrollView : View;
  const Container = safe ? SafeAreaView : View;
  const backgroundStyles = dark ? styles.dark : styles.light;

  return (
    <RootContainer style={[styles.root, backgroundStyles, rootStyle]}>
      <StatusBar
        barStyle={dark || statusBarDark ? "light-content" : "dark-content"}
        backgroundColor={
          dark || statusBarDark ? theme.colors.primary : theme.colors.white
        }
      />
      <Container style={[styles.container, backgroundStyles, containerStyle]}>
        {children}
      </Container>
    </RootContainer>
  );
};

Screen.propTypes = {
  safe: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  dark: PropTypes.bool,
  rootStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  statusBarDark: PropTypes.bool,
  keyboardAware: PropTypes.bool,
};

Screen.defaultProps = {
  safe: true,
  dark: false,
  rootStyle: {},
  containerStyle: {},
  statusBarDark: false,
  keyboardAware: false,
};

export default Screen;
