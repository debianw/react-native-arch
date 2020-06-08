import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Screen from "components/atoms/Screen";
import Button from "components/atoms/AppButton";
import Carousel from "components/Carousel";
import Typography from "components/atoms/Typography";
import EnterPhoneNumber from "components/EnterPhoneNumber";
import useStyles from "hooks/useStyles";

const Logo = require("../../../assets/logo.png");
const carouselSource1 = require("./assets/group.png");
const carouselSource2 = require("./assets/car-and-qr.png");
const carouselSource3 = require("./assets/booking.png");

const makeStyles = () =>
  StyleSheet.create({
    logoSection: {
      marginTop: 25,
      alignItems: "center",
    },

    carouselSection: {
      marginVertical: 25,
    },

    formContainer: {
      // flex: 1,
      paddingHorizontal: 16,
      // justifyContent: "space-between",
    },

    formDetails: {},

    formFooterContainer: {
      paddingVertical: 8,
      marginVertical: 25,
    },

    formFooterText: {
      textAlign: "center",
    },

    formTitle: {
      alignSelf: "center",
    },

    enterPhoneContainer: {
      marginVertical: 25,
    },
  });

const SignIn = () => {
  const { styles } = useStyles(makeStyles);

  return (
    <Screen dark>
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

          <EnterPhoneNumber containerStyle={styles.enterPhoneContainer} />

          <Button disabled title="Enter Phone Number" />
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
