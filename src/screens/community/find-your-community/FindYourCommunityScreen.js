import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppTheme from "config/theme/theme";
import Typography from "components/atoms/Typography";
import Icon from "components/atoms/Icon";
import Screen from "components/atoms/Screen";
import HeaderCommunityBanner from "components/community/HeaderCommunityBanner";
import TurnOnLocationServiceOverlay from "components/community/TurnOnLocationServiceOverlay";
import SearchInput from "components/atoms/SearchFakeInput";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      padding: theme.utils.spacing(2),
    },
  });

const FindYourCommunityScreen = () => {
  const { styles } = useStyles(makeStyles);
  const [turnOnLocationService, setTurnOnLocationService] = useState(false);

  const onPress = () => {
    console.log("go to search community");
  };

  return (
    <Screen statusBarDark open={turnOnLocationService}>
      <View style={styles.container}>
        <SearchInput onPress={onPress} placeholder="Search to add property" />
      </View>

      <TurnOnLocationServiceOverlay
        open={turnOnLocationService}
        close={() => setTurnOnLocationService(false)}
      />
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
