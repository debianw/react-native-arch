import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Overlay, ListItem } from "react-native-elements";
import Icon from "components/atoms/Icon";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";

const makeStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    valueContainer: {
      marginRight: 5,
    },
    value: {
      fontSize: 16,
    },
    iconContainer: {},
    overlayContainer: {
      width: 200,
      maxHeight: 400,
    },
  });

const noop = () => {};

const Select = ({
  containerStyle,
  valueStyle,
  color,
  options = [],
  onChange = noop,
  value,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.value === value)
  );
  const { styles } = useStyles(makeStyles);

  const onSelect = (option) => {
    setSelectedOption(option);
    onChange(option);
    setShowOptions(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowOptions(true)}>
        <View style={[styles.container, containerStyle]}>
          <View style={styles.valueContainer}>
            <Typography
              typographyStyles={[
                styles.value,
                valueStyle,
                color ? { color } : {},
              ]}
            >
              {selectedOption.value}
            </Typography>
          </View>

          <View style={styles.iconContainer}>
            <Icon name="chevron-down" size={24} color={color} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Overlay
        isVisible={showOptions}
        onBackdropPress={() => setShowOptions(false)}
      >
        <View style={styles.overlayContainer}>
          <ScrollView>
            {options.map((option) => (
              <ListItem
                onPress={() => onSelect(option)}
                key={option.id}
                title={option.label}
              />
            ))}
          </ScrollView>
        </View>
      </Overlay>
    </>
  );
};

export default Select;
