import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "components/atoms/Icon";
import useStyles from "hooks/useStyles";

const DEFAULTS = {
  size: 24,
  icon: {
    name: "check",
    size: 18,
  },
};

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: DEFAULTS.size,
      height: DEFAULTS.size,
      borderRadius: DEFAULTS.size / 2,
      borderWidth: 1,
      borderColor: theme.colors.primary1,
      alignItems: "center",
      justifyContent: "center",
    },
    checked: {
      backgroundColor: theme.colors.primary1,
    },
  });

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  const { styles, theme } = useStyles(makeStyles);

  return (
    <TouchableOpacity
      style={[styles.container, checked ? styles.checked : {}]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <Icon {...DEFAULTS.icon} color={theme.colors.white} />}
    </TouchableOpacity>
  );
};

export default CheckBox;
