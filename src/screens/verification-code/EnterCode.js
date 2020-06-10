import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import Button from "components/atoms/AppButton";
import Typography from "components/atoms/Typography";
import useStyles from "hooks/useStyles";
import InputCode from "./InputCode";

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
    },
    subtitle: {
      fontWeight: "normal",
      color: theme.colors.text.secondary,
    },
    resendButtonTitle: {
      color: theme.colors.primary1,
      fontWeight: "bold",
      fontSize: 14,
    },
    codesContainer: {
      flexDirection: "row",
      marginVertical: theme.utils.spacing(2),
    },
    inputCode: {
      marginRight: theme.utils.spacing(1),
    },
  });

const EnterCode = ({ onChange, onResend }) => {
  const [code1, setCode1] = useState();
  const [code2, setCode2] = useState();
  const [code3, setCode3] = useState();
  const [code4, setCode4] = useState();
  const { styles } = useStyles(makeStyles);

  useEffect(() => {
    onChange({
      code1,
      code2,
      code3,
      code4,
    });
  }, [code1, code2, code3, code4, onChange]);

  return (
    <View style={styles.container}>
      <Typography variant="subtitle2" style={styles.subtitle}>
        Verification code
      </Typography>

      <View style={styles.codesContainer}>
        <InputCode
          value={code1}
          onChangeText={(text) => setCode1(text)}
          style={styles.inputCode}
        />
        <InputCode
          value={code2}
          onChangeText={(text) => setCode2(text)}
          style={styles.inputCode}
        />
        <InputCode
          value={code3}
          onChangeText={(text) => setCode3(text)}
          style={styles.inputCode}
        />
        <InputCode
          value={code4}
          onChangeText={(text) => setCode4(text)}
          style={styles.inputCode}
        />
      </View>

      <Button
        onPress={onResend}
        title="Resend Code"
        type="clear"
        titleStyle={styles.resendButtonTitle}
      />
    </View>
  );
};

EnterCode.propTypes = {
  onChange: PropTypes.func,
  onResend: PropTypes.func,
};

EnterCode.defaultProps = {
  onChange: () => {},
  onResend: () => {},
};

export default EnterCode;
