import React from "react";
import { StyleSheet, Text } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import capitalize from "../../utils/capitalize";

const styles = theme => {
  return {
    root: {
      // color: theme.colors.grey3,
    },
    colorPrimary: {
      color: theme.colors.primary,
    },
    colorSecondary: {
      color: theme.colors.secondary,
    },
    colorTextPrimary: {
      color: theme.colors.primary,
    },
    colorTextSecondary: {
      color: theme.colors.secondary,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
      marginBottom: 8,
    },
    body2: {
      fontSize: 14,
      marginBottom: 8,
    },
    button: {
      fontSize: 14,
      fontWeight: "bold",
    },
    toolbar: {
      fontSize: 20,
    },
    caption: {
      fontSize: 12,
      textTransform: "uppercase",
    },
  };
};

const Typography = ({ children, color, variant, typographyStyles }) => {
  const { styles: classes } = useStyles(styles);

  return (
    <Text
      style={StyleSheet.flatten([
        classes.root,
        variant && classes[variant],
        color && classes[`color${capitalize(color)}`],
        typographyStyles,
      ])}
    >
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  color: "textPrimary",
  variant: "body2",
  typographyStyles: {},
};

export default Typography;
