import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen, {
  ScreenOptions as SignInScreenOptions,
} from "./screens/signin/SignIn";
import VerificationCodeScreen, {
  ScreenOptions as VerificationCodeScreenOptions,
} from "./screens/verification-code/VerificationCode";
import ScanYourLicenseScreen, {
  ScreenOptions as ScanYourLicenseScreenOptions,
} from "./screens/scan-license/ScanYourLicense";

import StyleGuideScreen, {
  ScreenOptions as StyleGuideScreenOptions,
} from "./screens/styleguide/StyleGuide";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={SignInScreenOptions}
        />

        <Stack.Screen
          name="VerificationCode"
          component={VerificationCodeScreen}
          options={VerificationCodeScreenOptions}
        />

        <Stack.Screen
          name="ScanYourLicense"
          component={ScanYourLicenseScreen}
          options={ScanYourLicenseScreenOptions}
        />

        <Stack.Screen
          name="StyleGuide"
          component={StyleGuideScreen}
          options={StyleGuideScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
