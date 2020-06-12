import React, { useState, useCallback } from "react";
import { View, Image, StyleSheet } from "react-native";
import Screen from "components/atoms/Screen";
import Button from "components/atoms/AppButton";
import Carousel from "components/Carousel";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";
import InputPhone from "./InputPhone";
import Instructions from "./Instructions";

const Logo = require("../../../../assets/logo.png");
const carouselSource1 = require("./assets/group.png");
const carouselSource2 = require("./assets/car-and-qr.png");
const carouselSource3 = require("./assets/booking.png");

const makeStyles = (theme) =>
  StyleSheet.create({
    logoSection: {
      marginTop: theme.utils.spacing(3),
      alignItems: "center",
    },

    carouselSection: {
      marginVertical: theme.utils.spacing(3),
    },

    formContainer: {
      paddingHorizontal: theme.utils.spacing(2),
    },

    formDetails: {},

    instructionsContainer: {
      width: 300,
      alignSelf: "center",
      marginVertical: theme.utils.spacing(2),
    },

    formTitle: {
      alignSelf: "center",
      marginBottom: theme.utils.spacing(2),
    },

    enterPhoneContainer: {
      marginTop: theme.utils.spacing(1),
      marginBottom: theme.utils.spacing(3),
    },
  });

const EnterPhoneScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const { styles } = useStyles(makeStyles);

  // @TODO Validate introduced phone number
  const isPhoneValid = phoneNumber?.value?.length > 0;

  // console.log("SignIn Phone =>>>> ", phoneNumber);
  const onPhoneNumberChange = useCallback(
    (option) => setPhoneNumber(option),
    []
  );

  return (
    <Screen dark keyboardAware>
      <View style={styles.logoSection}>
        <Image source={Logo} />
      </View>

      <View style={styles.carouselSection}>
        <Carousel
          items={[
            {
              id: "item-1",
              source: carouselSource1,
              title:
                "Get on-demand electric mobility where you live, work, and stay.",
            },
            {
              id: "item-2",
              source: carouselSource2,
              title:
                "Scan a QR code, unlock your vehicle, and get on the road.",
            },
            {
              id: "item-3",
              source: carouselSource3,
              title: "Book cars now or in advance.",
            },
          ]}
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formDetails}>
          <Typography
            variant="subtitle2"
            color="white"
            typographyStyles={styles.formTitle}
          >
            Enter Phone Number
          </Typography>

          <InputPhone
            onChange={onPhoneNumberChange}
            containerStyle={styles.enterPhoneContainer}
          />

          <Button
            disabled={!isPhoneValid}
            onPress={() => navigation.navigate("VerificationCode")}
            color="secondary"
            title="Enter Phone Number"
          />
        </View>
      </View>

      <Instructions style={styles.instructionsContainer} />
    </Screen>
  );
};

export const ScreenOptions = {
  headerShown: false,
};

export default EnterPhoneScreen;
