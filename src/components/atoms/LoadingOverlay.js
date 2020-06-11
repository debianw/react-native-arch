import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: 300,
      alignItems: "center",
      padding: theme.utils.spacing(2),
    },
    titleContainer: {
      paddingHorizontal: theme.utils.spacing(2),
      marginBottom: theme.utils.spacing(4),
    },
    title: {
      textAlign: "center",
    },
    indicatorContainer: {
      opacity: 0.8,
      marginBottom: theme.utils.spacing(1),
    },
  });

const LoadingOverlay = ({ isOpen, close, title }) => {
  const { styles, theme } = useStyles(makeStyles);

  return (
    <Overlay isVisible={isOpen} onBackdropPress={() => close(false)}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Typography
            variant="subtitle1"
            color="primary"
            typographyStyles={styles.title}
          >
            {title}
          </Typography>
        </View>

        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </View>
    </Overlay>
  );
};

LoadingOverlay.defaultProps = {
  width: 300,
  close: () => {},
};

export default LoadingOverlay;
