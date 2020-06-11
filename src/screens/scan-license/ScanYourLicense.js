import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Screen from "components/atoms/Screen";
import BottomSheet from "components/atoms/BottomSheet";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";
import Icon from "components/atoms/Icon";
import Label from "components/atoms/Label";
import Select from "components/atoms/Select";
import CheckBox from "components/atoms/CheckBox";
import Button from "components/atoms/AppButton";
import AppTheme from "config/theme/theme";

const CardIcon = require("../../../assets/cardIcon.png");

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    formContainer: {},
    formLabelContainer: {
      marginVertical: theme.utils.spacing(2),
    },
    formActionsContainer: {
      borderBottomWidth: 1,
      borderColor: theme.colors.grey5,
    },
    cardIcon: {
      alignSelf: "center",
    },
    footerContainer: {
      padding: theme.utils.spacing(2),
    },
    agreement: {
      flexDirection: "row",
      marginBottom: theme.utils.spacing(2),
    },
    agreementCheckContainer: {
      justifyContent: "center",
    },
    agreementDetailsContainer: {
      paddingHorizontal: theme.utils.spacing(2),
    },
  });

const ScanYourLicense = () => {
  const [openRegionSelector, setOpenRegionSelector] = useState(false);
  const { styles } = useStyles(makeStyles);

  return (
    <Screen statusBarDark>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Image source={CardIcon} style={styles.cardIcon} />
          <View style={styles.formLabelContainer}>
            <Label style={styles.regionLabel}>Issuing Country / Region</Label>
          </View>

          <View style={styles.formActionsContainer}>
            <Select
              fullWidth
              onPress={() => setOpenRegionSelector(true)}
              placeholder="NA"
              onChange={(option) => console.log("option selected => ", option)}
            />
          </View>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.agreement}>
          <View style={styles.agreementCheckContainer}>
            <CheckBox />
          </View>
          <View style={styles.agreementDetailsContainer}>
            <Typography variant="body3" color="textSecondary1">
              I authorize EnvoyThere to obtain information about my background
              including obtaining my vehicle or driving record. Read{" "}
              <Typography
                variant="body3"
                color="primary1"
                onPress={() => console.log("go to Eligiblity Requirements")}
              >
                Eligiblity Requirements
              </Typography>
              .
            </Typography>
          </View>
        </View>
        <Button disabled color="secondary" title="Scan License" />
      </View>

      <BottomSheet
        fullscreen
        isOpen={openRegionSelector}
        onDismiss={() => setOpenRegionSelector(false)}
      >
        <View>
          <Text> (Region / Country) Selector Component </Text>
        </View>
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
