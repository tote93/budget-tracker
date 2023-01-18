import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, StyledView } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabNewItemScreen({ navigation }: RootTabScreenProps<"TabAddNewItem">) {
  return (
    <StyledView style={styles.container}>
      <Text style={styles.title}>Tab New Item</Text>
      <StyledView style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
