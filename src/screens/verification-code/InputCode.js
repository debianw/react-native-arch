import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) =>
  StyleSheet.create({
    input: {
      color: theme.colors.primary,
      fontSize: 32,
      fontWeight: "bold",
      width: 56,
      height: 36,
      textAlign: "center",
      borderBottomWidth: 1,
      borderColor: theme.colors.grey3,
    },
  });

const InputCode = ({ style, ...textProps }) => {
  const [focusStyles, setFocusStyles] = useState({});
  const { styles, theme } = useStyles(makeStyles);

  const onFocus = () => {
    setFocusStyles({
      color: theme.colors.primary1,
      borderColor: theme.colors.primary1,
    });
  };

  const onBlur = () => {
    setFocusStyles({
      color: theme.colors.primary,
      borderColor: theme.colors.grey3,
    });
  };

  return (
    <TextInput
      keyboardType="number-pad"
      maxLength={1}
      onFocus={onFocus}
      onBlur={onBlur}
      style={[styles.input, style, focusStyles]}
      {...textProps}
    />
  );
};

export default InputCode;
