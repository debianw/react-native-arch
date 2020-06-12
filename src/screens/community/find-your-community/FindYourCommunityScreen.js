import React from "react";
import AppTheme from "config/theme/theme";
import Typography from "components/atoms/Typography";
import Icon from "components/atoms/Icon";
import Screen from "components/atoms/Screen";
import HeaderCommunityBanner from "components/community/HeaderCommunityBanner";
import TurnOnLocationServiceOverlay from "components/TurnOnLocationServiceOverlay";

const FindYourCommunityScreen = () => {
  return (
    <Screen statusBarDark>
      <TurnOnLocationServiceOverlay />
    </Screen>
  );
};

export const ScreenOptions = {
  headerBackImage: () => (
    <Icon name="chevron-left" size={32} color={AppTheme.colors.white} />
  ),
  headerLeftContainerStyle: {
    justifyContent: "flex-start",
    paddingTop: AppTheme.utils.spacing(1),
  },
  headerBackTitleVisible: false,
  headerStyle: {
    height: 136,
  },
  headerBackground: () => <HeaderCommunityBanner />,
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
