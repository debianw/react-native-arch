import React, { useState, useCallback } from "react";
import { View, Image, StyleSheet, InputText, Text } from "react-native";
import Screen from "components/atoms/Screen";
import Button from "components/atoms/AppButton";
import Carousel from "components/Carousel";
import Typography from "components/atoms/Typography";
import EnterPhoneNumber from "components/EnterPhoneNumber";
import useStyles from "hooks/useStyles";
import { TextInput } from "react-native-gesture-handler";

const Logo = require("../../../assets/logo.png");
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

    formFooterContainer: {
      paddingVertical: theme.utils.spacing(1),
      marginVertical: theme.utils.spacing(3),
    },

    formFooterText: {
      textAlign: "center",
      color: theme.colors.grey3,
    },

    formTitle: {
      alignSelf: "center",
    },

    enterPhoneContainer: {
      marginTop: theme.utils.spacing(1),
      marginBottom: theme.utils.spacing(3),
    },
  });

const SignIn = ({ navigation }) => {
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
    <Screen dark avoidKeyboard>
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

          <EnterPhoneNumber
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

        <View style={styles.formFooterContainer}>
          <Typography
            typographyStyles={styles.formFooterText}
            variant="body3"
            color="white"
          >
            By entering your phone number, you agree to Envoy’s{" "}
            <Typography
              variant="body3"
              color="primary1"
              onPress={() => console.log("go to Term & Conditions")}
            >
              Terms & Conditions
            </Typography>{" "}
            and{" "}
            <Typography
              onPress={() => console.log("go to Privacy Policy")}
              variant="body3"
              color="primary1"
            >
              Privacy Policy
            </Typography>
            .
          </Typography>
        </View>
      </View>
    </Screen>
  );
};

export const ScreenOptions = {
  headerShown: false,
};

export default SignIn;
