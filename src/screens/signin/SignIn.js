import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Screen from "components/atoms/Screen";
import Button from "components/atoms/AppButton";
import Carousel from "components/Carousel";
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

    formSection: {
      borderColor: "green",
      borderWidth: 1,
      padding: 16,
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

      <View style={styles.formSection}>
        <Text> Enter Phone Number </Text>

        <View style={{ marginVertical: 10 }}>
          <EnterPhoneNumber />
        </View>

        <Button disabled title="Enter Phone Number" />
      </View>
    </Screen>
  );
};

export const ScreenOptions = {
  headerShown: false,
};

export default SignIn;
