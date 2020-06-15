import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import Typography from "components/atoms/Typography";
import Icon from "components/atoms/Icon";
import Screen from "components/atoms/Screen";
import AppTheme from "config/theme/theme";
import SearchInput from "components/atoms/SearchInput";
import useStyles from "hooks/useStyles";

const results = [
  {
    id: 1,
    name: "Envoy HQ",
    address: "900 N Sepulveda Blvd, Manhattan Beach, CA",
  },
  {
    id: 2,
    name: "Waves Hotel",
    address: "900 N Sepulveda Blvd, Manhattan Beach, CA",
  },
  {
    id: 3,
    name: "Envoy HQ",
    address: "900 N Sepulveda Blvd, Manhattan Beach, CA",
  },
];

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    searchContainer: {
      marginBottom: theme.utils.spacing(1),
      paddingHorizontal: theme.utils.spacing(2),
    },
    filtersContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: theme.utils.spacing(2),
      marginBottom: theme.utils.spacing(2),
    },
    gpsIcon: {
      marginRight: theme.utils.spacing(1),
    },
    resultsContainer: {
      flex: 1,
    },
    listItemContainer: {
      paddingHorizontal: theme.utils.spacing(2),
    },
  });

const SearchCommunityScreen = ({ navigation }) => {
  const { styles } = useStyles(makeStyles);

  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => (
    <ListItem
      onPress={() => console.log("go to property => ", item.id)}
      containerStyle={styles.listItemContainer}
      title={<Typography variant="subtitle2">{item.name}</Typography>}
      subtitle={
        <Typography variant="subtitle3" color="textSecondary1">
          {item.address}
        </Typography>
      }
      bottomDivider
    />
  );

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchInput placeholder="Search by address or community name" />
        </View>

        <View style={styles.filtersContainer}>
          <Icon
            name="crosshairs-gps"
            size={24}
            color={AppTheme.colors.text.secondary1}
            style={styles.gpsIcon}
          />
          <Typography variant="subtitle3" color="textSecondary1">
            Nearby Communities
          </Typography>
        </View>

        <View style={styles.resultsContainer}>
          <FlatList
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={results}
          />
        </View>
      </View>
    </Screen>
  );
};

export const ScreenOptions = {
  headerBackImage: () => (
    <Icon name="chevron-left" size={32} color={AppTheme.colors.primary} />
  ),
  headerBackTitleVisible: false,
  headerTitle: () => (
    <Typography
      variant="toolbar"
      typographyStyles={{ color: AppTheme.colors.primary }}
    >
      Community
    </Typography>
  ),
};

export default SearchCommunityScreen;
