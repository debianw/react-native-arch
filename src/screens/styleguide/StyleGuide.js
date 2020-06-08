import React from "react";
import { View, StatusBar } from "react-native";
import { Input } from "react-native-elements";
import Typography from "components/atoms/Typography";
import Icon from "components/atoms/Icon";
import Screen from "components/atoms/Screen";
import Button from "components/atoms/AppButton";
import AppTheme from "config/theme/theme";
import useStyles from "hooks/useStyles";

const Row = ({ children }) => {
  return <View style={{ margin: 8 }}>{children}</View>;
};

const StyleGuide = ({ navigation }) => {
  const { theme } = useStyles();

  return (
    <Screen>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors?.primary}
      />

      <Row>
        <Button
          onPress={() => navigation.navigate("SignIn")}
          buttonStyle={{ width: 50 }}
          icon={<Icon name="home" size={15} color="white" />}
        />
      </Row>

      <Row>
        <Button title="outline" type="outline" />
      </Row>

      <Row>
        <Button title="Primary" />
      </Row>

      <Row>
        <Button title="Secondary" color="secondary" />
      </Row>

      <Row>
        <Button disabled title="Disabled" />
      </Row>

      <Row>
        <Input placeholder="Placeholder goes here ..." />
      </Row>

      <Row>
        <Input label="Label here" placeholder="Placeholder goes here ..." />
      </Row>
    </Screen>
  );
};

export const ScreenOptions = {
  headerBackImage: () => (
    <Icon name="chevron-left" size={32} color={AppTheme.colors.white} />
  ),
  headerBackTitleVisible: false,
  headerStyle: { backgroundColor: AppTheme.colors.primary },
  headerTitle: () => (
    <Typography
      variant="toolbar"
      typographyStyles={{ color: AppTheme.colors.white }}
    >
      Envoy StyleGuide
    </Typography>
  ),
};

export default StyleGuide;
