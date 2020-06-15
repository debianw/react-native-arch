import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "components/atoms/Icon";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
    },
    input: {
      backgroundColor: "rgba(216, 216, 216, 0.24)",
      paddingTop: theme.utils.spacing(2),
      paddingRight: theme.utils.spacing(2),
      paddingBottom: theme.utils.spacing(2),
      paddingLeft: theme.utils.spacing(5),
      borderRadius: 4,
      fontSize: 16,
    },
    searchIcon: {
      position: "absolute",
      left: theme.utils.spacing(1),
    },
  });

const SearchInput = ({ containerStyle, inputStyle, ...textInputProps }) => {
  const { styles, theme } = useStyles(makeStyles);

  return (
    <View style={[styles.container, containerStyle]}>
      <Icon style={styles.searchIcon} name="magnify" size={28} />
      <TextInput
        placeholderTextColor={theme.colors.text.secondary1}
        style={[styles.input, inputStyle]}
        {...textInputProps}
      />
    </View>
  );
};

export default SearchInput;
