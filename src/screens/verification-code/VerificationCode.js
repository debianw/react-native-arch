import React, { useState } from "react";
import { View } from "react-native";
import AppTheme from "config/theme/theme";
import Screen from "components/atoms/Screen";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";
import Button from "components/atoms/AppButton";
import Icon from "components/atoms/Icon";
import InputCode from "./InputCode";

const makeStyles = (theme) => ({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: theme.utils.spacing(2),
    marginVertical: theme.utils.spacing(4),
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    fontWeight: "normal",
    color: theme.colors.text.secondary,
  },
  verificationContainer: {
    marginBottom: theme.utils.spacing(4),
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
  const [code1, setCode1] = useState();
  const [code2, setCode2] = useState();
  const [code3, setCode3] = useState();
  const [code4, setCode4] = useState();
  const { styles, theme } = useStyles(makeStyles);

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
          <Typography variant="subtitle2" style={styles.subtitle}>
            Verification code
          </Typography>

          <View style={styles.codesContainer}>
            <InputCode
              value={code1}
              onChangeText={(text) => setCode1(text)}
              style={styles.inputCode}
            />
            <InputCode
              value={code2}
              onChangeText={(text) => setCode2(text)}
              style={styles.inputCode}
            />
            <InputCode
              value={code3}
              onChangeText={(text) => setCode3(text)}
              style={styles.inputCode}
            />
            <InputCode
              value={code4}
              onChangeText={(text) => setCode4(text)}
              style={styles.inputCode}
            />
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
