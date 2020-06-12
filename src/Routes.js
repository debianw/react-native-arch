import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EnterPhoneScreen, {
  ScreenOptions as EnterPhoneScreenOptions,
} from "screens/entry/enter-phone/EnterPhoneScreen";
import VerificationCodeScreen, {
  ScreenOptions as VerificationCodeScreenOptions,
} from "screens/entry/verification-code/VerificationCodeScreen";
import ScanYourLicenseScreen, {
  ScreenOptions as ScanYourLicenseScreenOptions,
} from "screens/license/scan-your-license/ScanYourLicense";
import FindYourCommunityScreen, {
  ScreenOptions as FindYourCommunityScreenOptions,
} from "screens/community/find-your-community/FindYourCommunityScreen";

import StyleGuideScreen, {
  ScreenOptions as StyleGuideScreenOptions,
} from "./screens/styleguide/StyleGuide";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FindYourCommunity">
        <Stack.Screen
          name="EnterPhone"
          component={EnterPhoneScreen}
          options={EnterPhoneScreenOptions}
        />

        <Stack.Screen
          name="VerificationCode"
          component={VerificationCodeScreen}
          options={VerificationCodeScreenOptions}
        />

        <Stack.Screen
          name="StyleGuide"
          component={StyleGuideScreen}
          options={StyleGuideScreenOptions}
        />

        <Stack.Screen
          name="ScanYourLicense"
          component={ScanYourLicenseScreen}
          options={ScanYourLicenseScreenOptions}
        />

        <Stack.Screen
          name="FindYourCommunity"
          component={FindYourCommunityScreen}
          options={FindYourCommunityScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
