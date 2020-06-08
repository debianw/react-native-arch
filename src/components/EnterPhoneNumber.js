import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Input } from "react-native-elements";
import Select from "components/atoms/Select";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    selectContainer: {
      borderBottomWidth: 1,
      borderColor: theme.colors.grey6,
      marginRight: 10,
    },
    inputContainer: {
      flex: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors.grey6,
      justifyContent: "flex-end",
    },
    input: {
      // flex: 1,
      color: theme.colors.white,
      fontSize: 16,
    },
  });

const EnterPhoneNumber = () => {
  const { styles, theme } = useStyles(makeStyles);

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <Select color={theme.colors.white} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

export default EnterPhoneNumber;
