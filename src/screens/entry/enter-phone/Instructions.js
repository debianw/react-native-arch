import React from "react";
import { View, StyleSheet } from "react-native";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) =>
  StyleSheet.create({
    text: {
      textAlign: "center",
      color: theme.colors.grey3,
    },
  });

const Instructions = ({ style }) => {
  const { styles } = useStyles(makeStyles);

  return (
    <View style={[style]}>
      <Typography
        typographyStyles={[styles.text, styles.formFooterText]}
        variant="body3"
        color="white"
      >
        By entering your phone number, you agree to Envoy’s{" "}
        <Typography
          variant="body3"
          color="primary1"
          onPress={() => console.log("go to Term & Conditions")}
        >
          Terms & Conditions
        </Typography>{" "}
        and{" "}
        <Typography
          onPress={() => console.log("go to Privacy Policy")}
          variant="body3"
          color="primary1"
        >
          Privacy Policy
        </Typography>
        .
      </Typography>
    </View>
  );
};

export default Instructions;
