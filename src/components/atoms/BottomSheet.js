import React, { useEffect } from "react";
import { useSafeArea } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import {
  View,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
} from "react-native";
import useStyles from "hooks/useStyles";
import PullDownTab from "components/atoms/PullDownTab";

const DECK_HEIGHT = 25;

const makeStyles = (theme) =>
  StyleSheet.create({
    overlay: {
      backgroundColor: "rgba(0,0,0,0.2)",
      flex: 1,
      justifyContent: "flex-end",
    },
    deck: {
      backgroundColor: theme.colors.white,
      height: DECK_HEIGHT,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
    },
  });

const screenHeight = Dimensions.get("screen").height;
const windowHeight = Dimensions.get("window").height;

const BottomSheet = ({ fullscreen, height, isOpen, children, onDismiss }) => {
  const insets = useSafeArea();
  const { styles, theme } = useStyles(makeStyles);

  const panY = new Animated.Value(screenHeight);
  const resetPositionAnimation = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
  });

  useEffect(() => {
    if (!isOpen) return;

    resetPositionAnimation.start();
  }, [isOpen, resetPositionAnimation]);

  const closeAnimation = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
  });

  const onClose = () => {
    closeAnimation.start(() => onDismiss());
  };

  const panResponders = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => false,
    onPanResponderMove: Animated.event([null, { dy: panY }]),
    onPanResponderRelease: (e, gs) => {
      if (gs.dy > 200 || gs.vy > 1) {
        return closeAnimation.start(() => onDismiss());
      }
      return resetPositionAnimation.start();
    },
  });

  const top = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <Modal
      animated
      animationType="fade"
      visible={isOpen}
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Animated.View
          {...panResponders.panHandlers}
          style={[styles.deck, { top }]}
        >
          <PullDownTab />
        </Animated.View>

        <Animated.View style={[{ top }]}>
          <View
            style={{
              height: fullscreen
                ? windowHeight - DECK_HEIGHT - insets.top
                : height,
              backgroundColor: theme.colors.white,
            }}
          >
            {children}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

BottomSheet.propTypes = {
  fullscreen: PropTypes.bool,
  height: PropTypes.number,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
};

BottomSheet.defaultProps = {
  fullscreen: false,
  height: 400,
  isOpen: false,
  onDismiss: () => {},
};

export default BottomSheet;
