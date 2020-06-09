import React from "react";
import { View } from "react-native";
import AppTheme from "config/theme/theme";
import Screen from "components/atoms/Screen";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";
import Button from "components/atoms/AppButton";
import Icon from "components/atoms/Icon";

const makeStyles = (theme) => ({
  innerContent: {
    backgroundColor: theme.colors.primary,
  },
});

const VerificationCode = ({ navigation }) => {
  const { styles, theme } = useStyles(makeStyles);

  return (
    <Screen>
      <Typography variant="title" color="primary">
        We sent you a verification code{" "}
      </Typography>

      <Button
        color="secondary"
        onPress={() => navigation.navigate("ScanYourLicense")}
        title="Submit"
      />
    </Screen>
  );
};

export const ScreenOptions = {
  headerBackImage: () => (
    <Icon name="chevron-left" size={32} color={AppTheme.colors.primary} />
  ),
  headerBackTitleVisible: false,
  headerStyle: { backgroundColor: AppTheme.colors.white },
  headerTitle: () => null,
};

export default VerificationCode;
