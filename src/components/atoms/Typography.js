import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";
import useStyles from "hooks/useStyles";
import capitalize from "utils/capitalize";

const styles = (theme) =>
  StyleSheet.create({
    root: {
      color: theme.colors.primary,
    },
    colorPrimary: {
      color: theme.colors.primary,
    },
    colorPrimary1: {
      color: theme.colors.primary1,
    },
    colorSecondary: {
      color: theme.colors.secondary,
    },
    colorWhite: {
      color: theme.colors.text.white,
    },
    colorTextPrimary: {
      color: theme.colors.text.primary,
    },
    colorTextSecondary: {
      color: theme.colors.text.secondary,
    },
    colorTextSecondary1: {
      color: theme.colors.text.secondary1,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: 20,
      fontWeight: "bold",
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: "bold",
    },
    subtitle3: {
      fontSize: 14,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 14,
    },
    body3: {
      fontSize: 12,
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
    label: {
      fontSize: 12,
      textTransform: "uppercase",
    },
  });

const Typography = ({
  children,
  color,
  variant,
  typographyStyles,
  ...textProps
}) => {
  const { styles: classes } = useStyles(styles);

  return (
    <Text
      style={StyleSheet.flatten([
        classes.root,
        variant && classes[variant],
        color && classes[`color${capitalize(color)}`],
        typographyStyles,
      ])}
      {...textProps}
    >
      {children}
    </Text>
  );
};

Typography.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    ),
  ]).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "primary1",
    "secondary",
    "white",
    "textPrimary",
    "textSecondary",
    "textSecondary1",
  ]),
  variant: PropTypes.oneOf([
    "title",
    "subtitle1",
    "subtitle2",
    "subtitle3",
    "body1",
    "body2",
    "body3",
    "button",
    "toolbar",
    "caption",
    "label",
  ]),
  // typographyStyles: TextPropTypes?.style,
};

Typography.defaultProps = {
  color: "textPrimary",
  variant: "body2",
  // typographyStyles: {},
};

export default Typography;
