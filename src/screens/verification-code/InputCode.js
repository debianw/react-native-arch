import React from "react";
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
  const { styles } = useStyles(makeStyles);

  return <TextInput style={[styles.input, style]} {...textProps} />;
};

export default InputCode;
