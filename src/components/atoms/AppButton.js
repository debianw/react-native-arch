import React from "react";
import { Button } from "react-native-elements";
import useStyles from "../../hooks/useStyles";

const AppButton = ({ children, color, ...otherProps }) => {
  const { theme } = useStyles(() => {});

  return <Button buttonStyle={color && { backgroundColor: theme.colors?.[color || "primary"] }} {...otherProps} />;
};

export default AppButton;