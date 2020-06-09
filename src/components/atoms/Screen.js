import React from "react";
import PropTypes from "prop-types";
import {
  SafeAreaView,
  View,
  ViewPropTypes,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) => ({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  dark: {
    backgroundColor: theme.colors.primary,
  },
  light: {
    backgroundColor: theme.colors.white,
  },
});

const Screen = ({ safe, children, style, dark }) => {
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
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={styles.innerContainer}
        >
          {children}
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};

Screen.propTypes = {
  safe: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  dark: PropTypes.bool,
  style: ViewPropTypes.style,
};

Screen.defaultProps = {
  safe: true,
  dark: false,
  style: {},
};

export default Screen;
