import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
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
    select: {},
    inputContainer: {
      flex: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors.grey6,
    },
    input: {
      color: theme.colors.white,
      fontSize: 16,
    },
  });

const areaCodes = [
  { id: "us", code: "+1", iso: "US" },
  { id: "nz", code: "+64", iso: "NZ" },
  { id: "au", code: "+61", iso: "AU" },
  { id: "vn", code: "+84", iso: "VN" },
];

const EnterPhoneNumber = ({ containerStyle }) => {
  const { styles, theme } = useStyles(makeStyles);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.selectContainer}>
        <Select
          color={theme.colors.white}
          containerStyle={styles.select}
          options={areaCodes.map(({ id, code, iso }) => ({
            id,
            value: code,
            label: `${iso} ${code}`,
          }))}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput keyboardType="phone-pad" style={styles.input} />
      </View>
    </View>
  );
};

export default EnterPhoneNumber;
