import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import Center from "components/atoms/Center";
import Screen from "components/atoms/Screen";
import BottomSheet from "components/atoms/BottomSheet";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";
import Icon from "components/atoms/Icon";
import AppButton from "components/atoms/AppButton";
import AppTheme from "config/theme/theme";

const makeStyles = (theme) => ({
  innerContent: {
    backgroundColor: theme.colors.primary,
  },
});

const ScanYourLicense = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const { theme } = useStyles(makeStyles);

  return (
    <Screen statusBarDark>
      <Center>
        <Typography variant="subtitle1">Issuing Country / Region</Typography>
        <AppButton title="Open" onPress={() => setOpen(true)} />
      </Center>

      <BottomSheet fullscreen isOpen={open} onDismiss={() => setOpen(false)}>
        <ScrollView>
          <Text> Content ... </Text>
        </ScrollView>
      </BottomSheet>
    </Screen>
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
      Scan Your License
    </Typography>
  ),
};

export default ScanYourLicense;
