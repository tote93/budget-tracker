import * as React from "react";
import { StyleSheet } from "react-native";
import { Icon, ListItem } from "react-native-elements";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
const list = [
  {
    title: "Categories",
    icon: 'bookshelf',
    type: "material-community"

  },
  {
    title: "Currencies",
    icon: 'coins',
    type: "font-awesome-5"
  },
  {
    title: "General Settings",
    icon: 'settings',
    type: "feather"
  },
];
export default function SettingsScreen({ navigation, }: RootTabScreenProps<"TabSettings">) {
  return (
    <View style={styles.container}>
      {list.map((item, i) => (
        <ListItem key={i} bottomDivider >
          <Icon type={item.type} name={item.icon} />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={30} color="black"></ListItem.Chevron>
        </ListItem>
      ))}
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
