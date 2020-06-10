import React from "react";
import { View } from "react-native";
import AppTheme from "config/theme/theme";
import Screen from "components/atoms/Screen";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";
import Button from "components/atoms/AppButton";
import Icon from "components/atoms/Icon";
import EnterCode from "./EnterCode";

const makeStyles = (theme) => ({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: theme.utils.spacing(2),
    marginVertical: theme.utils.spacing(8),
  },
  title: {
    textAlign: "center",
  },
  verificationContainer: {
    marginBottom: theme.utils.spacing(4),
  },
  footerContainer: {
    marginHorizontal: theme.utils.spacing(2),
  },
});

const VerificationCode = ({ navigation }) => {
  const { styles } = useStyles(makeStyles);

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Typography
            typographyStyles={styles.title}
            variant="title"
            color="primary"
          >
            We sent you a verification code
          </Typography>
        </View>

        <View style={styles.verificationContainer}>
          <EnterCode />
        </View>

        <View style={styles.footerContainer}>
          <Button
            color="secondary"
            onPress={() => navigation.navigate("ScanYourLicense")}
            title="Submit"
            style={styles.submitButton}
          />
        </View>
      </View>
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
