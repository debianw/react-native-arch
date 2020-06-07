import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from 'react-native-elements';

const noop = () => {};

export const useStyles = (fn = noop) => {
  const { theme } = useContext(ThemeContext);
  const stylesObj = fn(theme);
  const styles = StyleSheet.create(stylesObj);

  return { styles, theme };
};

export default useStyles;