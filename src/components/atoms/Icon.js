import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, size = 32, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export default Icon;
