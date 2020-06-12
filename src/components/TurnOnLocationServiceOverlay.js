import React from "react";
import { Overlay } from "react-native-elements";
import { View, Image, StyleSheet } from "react-native";
import Typography from "components/atoms/Typography";
import Button from "components/atoms/AppButton";
import useStyles from "hooks/useStyles";

const BannerImage = require("../../assets/community/banner.png");

const makeStyles = (theme) =>
  StyleSheet.create({
    overlay: {
      width: 312,
      padding: 0,
      overflow: "hidden",
    },
    container: {
      padding: theme.utils.spacing(2),
    },
    title: {
      textAlign: "center",
      marginBottom: theme.utils.spacing(2),
    },
    descriptionText: {
      textAlign: "center",
      marginBottom: theme.utils.spacing(2),
    },
    turnOnButton: {
      marginBottom: theme.utils.spacing(1),
    },
    cancelButtonTitle: {
      color: theme.colors.secondaryDarkGrey,
    },
  });

const TurnOnLocationServiceOverlay = () => {
  const { styles } = useStyles(makeStyles);

  return (
    <Overlay isVisible overlayStyle={styles.overlay}>
      <>
        <Image source={BannerImage} />

        <View style={styles.container}>
          <Typography
            variant="subtitle1"
            color="primary"
            typographyStyles={styles.title}
          >
            View Envoy locations that are nearest you!
          </Typography>

          <Typography typographyStyles={styles.descriptionText}>
            Turn on Location Services in order to book vehicles with Envoy.
          </Typography>

          <View style={styles.containerActions}>
            <Button
              title="Turn on Location Services"
              color="secondary"
              style={styles.turnOnButton}
            />

            <Button
              titleStyle={styles.cancelButtonTitle}
              title="Not Now"
              type="clear"
            />
          </View>
        </View>
      </>
    </Overlay>
  );
};

export default TurnOnLocationServiceOverlay;
