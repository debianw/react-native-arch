import React from "react";
import { View, StatusBar } from "react-native";
import Center from "../../components/atoms/Center";
import Screen from "../../components/atoms/Screen";
import Button from "../../components/atoms/AppButton";
import Typography from "../../components/atoms/Typography";
import useStyles from "../../hooks/useStyles";

const SignIn = ({ navigation }) => {
  const { theme } = useStyles();

  return (
    <Screen style={{ justifyContent: "center" }}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />

      <Center>
        <Typography variant="subtitle1"> SignIn Screen </Typography>
      </Center>

      <View style={{ marginHorizontal: 8 }}>
        <Button
          title="Ride Envoy"
          color="secondary"
          onPress={() => navigation.navigate("VerificationCode")}
        />
      </View>
    </Screen>
  );
};

export const ScreenOptions = {
  headerShown: false,
};

export default SignIn;
