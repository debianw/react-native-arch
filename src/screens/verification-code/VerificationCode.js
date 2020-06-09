import React from "react";
import { View, ScrollView } from "react-native";
import AppTheme from "config/theme/theme";
import Screen from "components/atoms/Screen";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";
import Button from "components/atoms/AppButton";
import Icon from "components/atoms/Icon";
import InputCode from "./InputCode";

const makeStyles = (theme) => ({
  titleContainer: {
    marginHorizontal: theme.utils.spacing(2),
    marginBottom: theme.utils.spacing(2),
  },
  title: {
    textAlign: "center",
  },
  verificationContainer: {
    marginVertical: theme.utils.spacing(4),
    alignItems: "center",
  },
  footerContainer: {
    marginHorizontal: theme.utils.spacing(2),
  },
  codesContainer: {
    flexDirection: "row",
    marginVertical: theme.utils.spacing(2),
  },
  inputCode: {
    marginRight: theme.utils.spacing(1),
  },
});

const VerificationCode = ({ navigation }) => {
  const { styles, theme } = useStyles(makeStyles);

  return (
    <Screen avoidKeyboard>
      <ScrollView
        style={{ borderWidth: 1, borderColor: "orange", height: "100%" }}
      >
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
          <Typography variant="subtitle2" color="textSecondary">
            Verification code
          </Typography>

          <View style={styles.codesContainer}>
            <InputCode value="2" style={styles.inputCode} />
            <InputCode value="4" style={styles.inputCode} />
            <InputCode value="4" style={styles.inputCode} />
            <InputCode value="" style={styles.inputCode} />
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Button
            color="secondary"
            onPress={() => navigation.navigate("ScanYourLicense")}
            title="Submit"
            style={styles.submitButton}
          />
        </View>
      </ScrollView>
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
