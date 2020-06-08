import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "components/atoms/Icon";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";

const makeStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
      justifyContent: "space-between",
    },
    valueContainer: {
      marginRight: 5,
    },
    value: {
      fontSize: 16,
    },
    iconContainer: {},
  });

const Select = ({ containerStyle, valueStyle, color }) => {
  const { styles } = useStyles(makeStyles);

  const onPress = () => {
    console.log("open selector");
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.valueContainer}>
          <Typography
            typographyStyles={[
              styles.value,
              valueStyle,
              color ? { color } : {},
            ]}
          >
            +1
          </Typography>
        </View>

        <View style={styles.iconContainer}>
          <Icon name="chevron-down" size={24} color={color} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Select;
