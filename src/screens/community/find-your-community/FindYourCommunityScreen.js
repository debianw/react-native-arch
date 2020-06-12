import React from "react";
import { View, Text } from "react-native";
import AppTheme from "config/theme/theme";
import Typography from "components/atoms/Typography";
import Icon from "components/atoms/Icon";

const FindYourCommunityScreen = () => {
  return (
    <View>
      <Text> Find your community </Text>
    </View>
  );
};

export const ScreenOptions = {
  headerBackImage: () => (
    <Icon name="chevron-left" size={32} color={AppTheme.colors.white} />
  ),
  headerBackTitleVisible: false,
  headerStyle: { backgroundColor: AppTheme.colors.primary },
  headerTitle: () => (
    <Typography
      variant="toolbar"
      typographyStyles={{ color: AppTheme.colors.white }}
    >
      Let&apos;s find your community!
    </Typography>
  ),
};

export default FindYourCommunityScreen;
