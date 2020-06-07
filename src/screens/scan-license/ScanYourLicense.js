import React from "react";
import { StatusBar } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Center from "../../components/atoms/Center";
import Screen from "../../components/atoms/Screen";
import Typography from "../../components/atoms/Typography";
import useStyles from "../../hooks/useStyles";
import Icon from "../../components/atoms/Icon";
import AppTheme from "../../config/theme/theme";

const makeStyles = theme => ({
  innerContent: {
    backgroundColor: theme.colors.primary,
  },
});

const ScanYourLicense = ({ navigation }) => {
  const { theme } = useStyles(makeStyles);

  return (
    <Screen safe={false}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors?.primary} />

      <Center>
        <Typography variant="subtitle1">
          Issuing Country / Region
        </Typography>
      </Center>
    </Screen>
  );
};

export const ScreenOptions = {
  headerBackImage: () => (
    <Icon
      name="chevron-left"
      size={32}
      color={AppTheme.colors.white}
    />
  ),
  headerBackTitleVisible: false,
  headerStyle: { backgroundColor: AppTheme.colors.primary },
  headerTitle: () => (
    <Typography variant="toolbar" typographyStyles={{ color: AppTheme.colors.white }}>
      Scan Your License
    </Typography>
  ),
};

export default ScanYourLicense;
