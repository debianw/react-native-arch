import React, { useRef, useState } from "react";
import { Image, Dimensions, ScrollView, View, StyleSheet } from "react-native";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) =>
  StyleSheet.create({
    panel: {
      // justifyContent: "space-between",
    },
    titleContainer: {
      width: 327,
      marginBottom: 25,
      alignSelf: "center",
    },
    title: {
      textAlign: "center",
    },
    imageContainer: {},
    image: {
      width: "100%",
      resizeMode: "cover",
    },
    indicatorsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    indicator: {
      borderRadius: 5,
      width: 10,
      height: 10,
      backgroundColor: theme.colors.grey6,
      marginRight: 5,
    },
    indicatorActive: {
      backgroundColor: theme.colors.primary1,
    },
  });

const { width } = Dimensions.get("window");

const Panel = ({ children, style }) => {
  return <View style={[style]}>{children}</View>;
};

const Carousel = ({ items = [] }) => {
  const [activePanel, setActivePanel] = useState(0);
  const { styles } = useStyles(makeStyles);
  const scrollerRef = useRef();
  const panelStyles = {
    width,
  };

  const onScroll = ({ nativeEvent }) => {
    const active = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    setActivePanel(active);
  };

  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={{ width }}
        ref={scrollerRef}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {items.map((item) => (
          <Panel key={item.id} style={[styles.panel, panelStyles]}>
            {/* Title */}
            <View style={styles.titleContainer}>
              <Typography
                variant="subtitle1"
                color="white"
                typographyStyles={styles.title}
              >
                {item.title}
              </Typography>
            </View>

            {/* Picture */}
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.source} />
            </View>
          </Panel>
        ))}
      </ScrollView>

      {/* Indicators */}
      <View style={styles.indicatorsContainer}>
        {items.map((item, idx) => (
          <View
            key={`indicator-${item.id}`}
            style={[
              styles.indicator,
              activePanel === idx ? styles.indicatorActive : {},
            ]}
          />
        ))}
      </View>
    </>
  );
};

export default Carousel;
