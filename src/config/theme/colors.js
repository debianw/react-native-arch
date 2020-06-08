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
  greyOutline: "#bbb",
  searchBg: "#303337",
  success: "#52c41a",
  error: "#ff190c",
  warning: "#faad14",
  disabled: "hsl(208, 8%, 90%)",
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? "#bcbbc1" : "rgba(0, 0, 0, 0.12)",
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)",
    white: "#FFFFFF",
  },
  // platform: {
  //   ios: {
  //     primary: '#007aff',
  //     secondary: '#5856d6',
  //     success: '#4cd964',
  //     error: '#ff3b30',
  //     warning: '#ffcc00',
  //   },
  //   android: {
  //     primary: '#2196f3',
  //     secondary: '#9C27B0',
  //     success: '#4caf50',
  //     error: '#f44336',
  //     warning: '#ffeb3b',
  //   },
  // },
};
