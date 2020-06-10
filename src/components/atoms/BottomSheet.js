import React, { useEffect } from "react";
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

const makeStyles = (theme) =>
  StyleSheet.create({
    overlay: {
      backgroundColor: "rgba(0,0,0,0.2)",
      flex: 1,
      justifyContent: "flex-end",
    },
    deck: {
      backgroundColor: theme.colors.white,
      height: 20,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
    },
  });

const screenHeight = Dimensions.get("screen").height;

const BottomSheet = ({ isOpen, children, onDismiss }) => {
  const { styles } = useStyles(makeStyles);

  const panY = new Animated.Value(screenHeight);
  const resetPositionAnimation = Animated.timing(panY, {
    toValue: 0,
    duration: 400,
  });

  useEffect(() => {
    if (!isOpen) return;

    resetPositionAnimation.start();
  }, [isOpen, resetPositionAnimation]);

  const closeAnimation = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 400,
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

        <Animated.View style={[{ top }]}>{children}</Animated.View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
