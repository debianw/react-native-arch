import React from "react";
import { View, StyleSheet, Image } from "react-native";
import useStyles from "hooks/useStyles";

const CommunityBgLogo = require("../../../assets/community/banner.png");

const makeStyles = () =>
  StyleSheet.create({
    image: {
      width: "100%",
      opacity: 0.2,
    },
  });

const CommunityHeaderBanner = () => {
  const { styles, theme } = useStyles(makeStyles);

  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      <Image style={styles.image} resizeMode="cover" source={CommunityBgLogo} />
    </View>
  );
};

export default CommunityHeaderBanner;
