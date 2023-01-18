import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Icon, ListItem } from "react-native-elements";
import StatusBarComponent from "../components/StatusBar";
import { StyledView } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function SettingsScreen({ navigation }: RootTabScreenProps<"TabSettings">) {
  return (
    <StyledView style={styles.container}>
      <StatusBarComponent />
      {/* Categories */}
      <StyledView style={{ marginTop: 30 }}>
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
      </StyledView>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
