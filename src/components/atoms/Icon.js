import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, size = 32, color, style }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
};

export default Icon;
