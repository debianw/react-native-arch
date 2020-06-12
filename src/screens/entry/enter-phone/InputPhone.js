import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import Select from "components/atoms/Select";
import Icon from "components/atoms/Icon";
import useStyles from "hooks/useStyles";

const areaCodes = [
  { id: "us", code: "+1", iso: "US", default: true },
  { id: "nz", code: "+64", iso: "NZ" },
  { id: "au", code: "+61", iso: "AU" },
  { id: "vn", code: "+84", iso: "VN" },
];
const defaultAreaCode = areaCodes.find((areaCode) => areaCode.default);

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
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: theme.colors.grey6,
      alignItems: "center",
    },
    input: {
      flex: 1,
      color: theme.colors.white,
      fontSize: 16,
    },
  });

const noop = () => {};

const InputPhone = ({ containerStyle, onChange = noop }) => {
  const [value, setValue] = useState("");
  const [areaCode, setAreaCode] = useState(defaultAreaCode);
  const { styles, theme } = useStyles(makeStyles);

  useEffect(() => {
    onChange({
      areaCode,
      value,
    });
  }, [areaCode, value, onChange]);

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
          value={defaultAreaCode.code}
          onChange={(option) => setAreaCode(option)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="phone-pad"
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text)}
        />

        {value.length > 0 && (
          <TouchableHighlight onPress={() => setValue("")}>
            <Icon
              name="close-circle-outline"
              size={20}
              color={theme.colors.white}
            />
          </TouchableHighlight>
        )}
      </View>
    </View>
  );
};

export default InputPhone;
