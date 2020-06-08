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
      // justifyContent: "flex-end",
    },
    select: {
      // paddingVertical: 8,
    },
    inputContainer: {
      flex: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors.grey6,
      // justifyContent: "flex-end",
    },
    input: {
      color: theme.colors.white,
      fontSize: 16,
      // paddingVertical: 8,
    },
  });

const EnterPhoneNumber = ({ containerStyle }) => {
  const { styles, theme } = useStyles(makeStyles);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.selectContainer}>
        <Select color={theme.colors.white} containerStyle={styles.select} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput keyboardType="phone-pad" style={styles.input} />
      </View>
    </View>
  );
};

export default EnterPhoneNumber;
