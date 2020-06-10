import React, { useState } from "react";
import { View } from "react-native";
import AppTheme from "config/theme/theme";
import Screen from "components/atoms/Screen";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";
import Button from "components/atoms/AppButton";
import Icon from "components/atoms/Icon";
import LoadingOverlay from "components/atoms/LoadingOverlay";
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
  const [loadingIndicator, setLoadingIndicator] = useState({
    show: false,
    message: "",
  });
  const { styles } = useStyles(makeStyles);

  const onSubmit = () => {
    setLoadingIndicator({
      show: true,
      message: "Submitting",
    });

    setTimeout(() => {
      setLoadingIndicator({ show: false, message: "" });
      navigation.navigate("ScanYourLicense");
    }, 1000);
  };

  const onResend = () => {
    setLoadingIndicator({
      show: true,
      message: "Resending Code to (555) 322-1231",
    });

    setTimeout(() => {
      setLoadingIndicator({ show: false, message: "" });
    }, 1000);
  };

  return (
    <>
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
            <EnterCode onResend={onResend} />
          </View>

          <View style={styles.footerContainer}>
            <Button
              color="secondary"
              onPress={onSubmit}
              title="Submit"
              style={styles.submitButton}
            />
          </View>
        </View>
      </Screen>

      {loadingIndicator.show && (
        <LoadingOverlay isOpen title={loadingIndicator.message} />
      )}
    </>
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
