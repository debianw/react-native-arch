import React from "react";
import PropTypes from "prop-types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  View,
  ViewPropTypes,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) => ({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    justifyContent: "flex-end",
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
  innerContainerStyle,
  dark,
}) => {
  const { styles, theme } = useStyles(makeStyles);
  const Container = safe ? SafeAreaView : View;
  const backgroundStyles = dark ? styles.dark : styles.light;

  return (
    <KeyboardAwareScrollView style={[styles.root, backgroundStyles, rootStyle]}>
      <StatusBar
        barStyle={dark ? "light-content" : "dark-content"}
        backgroundColor={dark ? theme.colors.primary : theme.colors.white}
      />
      <Container style={[styles.container, backgroundStyles, containerStyle]}>
        <View style={[styles.innerContainer, innerContainerStyle]}>
          {children}
        </View>
      </Container>
    </KeyboardAwareScrollView>
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
  innerContainerStyle: ViewPropTypes.style,
};

Screen.defaultProps = {
  safe: true,
  dark: false,
  rootStyle: {},
  containerStyle: {},
  innerContainerStyle: {},
};

export default Screen;
