import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
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
      justifyContent: "center",
    },
    value: {
      fontSize: 16,
    },
    iconContainer: {},
    overlayContainer: {
      width: 200,
      maxHeight: 400,
    },
    placeholder: {
      fontWeight: "bold",
    },
  });

const Select = ({
  fullWidth,
  onPress,
  placeholder,
  containerStyle,
  valueStyle,
  color,
  options,
  onChange,
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

  const onPressInput = () => {
    onPress();
    setShowOptions(true);
  };

  return (
    <>
      <TouchableOpacity onPress={onPressInput}>
        <View style={[styles.container, containerStyle]}>
          <View style={[styles.valueContainer, fullWidth ? { flex: 1 } : {}]}>
            {selectedOption && (
              <Typography
                typographyStyles={[
                  styles.value,
                  valueStyle,
                  color ? { color } : {},
                ]}
              >
                {selectedOption.value}
              </Typography>
            )}

            {!selectedOption && placeholder && (
              <Typography
                color="textSecondary1"
                typographyStyles={[styles.placeholder, color ? { color } : {}]}
              >
                {placeholder}
              </Typography>
            )}
          </View>

          <View style={styles.iconContainer}>
            <Icon name="chevron-down" size={24} color={color} />
          </View>
        </View>
      </TouchableOpacity>

      {options.length > 0 && (
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
      )}
    </>
  );
};

Select.propTypes = {
  fullWidth: PropTypes.bool,
  onPress: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  fullWidth: false,
  placeholder: "",
  options: [],
  onPress: () => {},
  onChange: () => {},
};

export default Select;
