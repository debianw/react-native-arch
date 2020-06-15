import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import Icon from "components/atoms/Icon";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
    },
    input: {
      borderRadius: 4,
      backgroundColor: "rgba(216, 216, 216, 0.24)",
      paddingTop: theme.utils.spacing(2),
      paddingRight: theme.utils.spacing(2),
      paddingBottom: theme.utils.spacing(2),
      paddingLeft: theme.utils.spacing(5),
    },
    inputText: {
      fontSize: 16,
      color: theme.colors.text.secondary1,
    },
    searchIcon: {
      position: "absolute",
      left: theme.utils.spacing(1),
    },
  });

const SearchInput = ({ containerStyle, placeholder, onPress }) => {
  const { styles } = useStyles(makeStyles);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Icon style={styles.searchIcon} name="magnify" size={28} />
        <View style={styles.input}>
          <Text style={styles.inputText}>{placeholder}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchInput;
