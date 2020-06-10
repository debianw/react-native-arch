import React from "react";
import { View, StyleSheet } from "react-native";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) =>
  StyleSheet.create({
    pullDownTab: {
      width: 32,
      height: 5,
      marginTop: 4,
      borderRadius: 3,
      backgroundColor: theme.colors.secondaryDarkGrey,
      alignSelf: "center",
    },
  });

const PullDownTab = ({ style }) => {
  const { styles } = useStyles(makeStyles);

  return <View style={[styles.pullDownTab, style]} />;
};

export default PullDownTab;
