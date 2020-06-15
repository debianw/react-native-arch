import { StyleSheet } from "react-native";

export default {
  primary: "#0B1C51",
  primary1: "#2B9FFF",
  secondary: "#FF5548",
  white: "#FFFFFF",
  grey0: "#393e42",
  grey1: "#43484d",
  grey2: "#5e6977",
  grey3: "#86939e",
  grey4: "#bdc6cf",
  grey5: "#e1e8ee",
  grey6: "#e6e6e6",
  secondaryDarkGrey: "#9f9f9f",
  secondaryLightGrey: "#D8D8D8",
  greyOutline: "#bbb",
  searchBg: "#303337",
  success: "#52c41a",
  error: "#ff190c",
  warning: "#faad14",
  disabled: "hsl(208, 8%, 90%)",
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? "#bcbbc1" : "rgba(0, 0, 0, 0.12)",
  text: {
    primary: "#232323",
    secondary: "rgba(0, 0, 0, 0.54)",
    secondary1: "#9f9f9f",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)",
    white: "#FFFFFF",
  },
};
