import * as React from "react";
import { StyleSheet } from "react-native";
import { Icon, ListItem } from "react-native-elements";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function SettingsScreen({ navigation, }: RootTabScreenProps<"TabSettings">) {
  return (
    <View style={styles.container}>
      {/* Categories */}
      <ListItem bottomDivider onPress={() => navigation.navigate("Categories")}>
        <Icon type="material-community" name="bookshelf" />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>Categories</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={30} color="black"></ListItem.Chevron>
      </ListItem>
      {/* Currencies */}
      <ListItem bottomDivider onPress={() => navigation.navigate("Currencies")}>
        <Icon type="font-awesome-5" name="coins" />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>Currencies</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={30} color="black"></ListItem.Chevron>
      </ListItem>
      {/* General Settings */}
      <ListItem bottomDivider onPress={() => navigation.navigate("Settings")}>
        <Icon type="feather" name="settings" />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>General Settings</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={30} color="black"></ListItem.Chevron>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: "black"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
