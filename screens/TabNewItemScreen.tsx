import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { Text, StyledView } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabNewItemScreen({ navigation }: RootTabScreenProps<"TabAddNewItem">) {
  const [quantity, setQuantity] = React.useState<string>("");

  const handleRemove = () => {

  }
  const formatNumber = (number: string) => {
    // function that receives an string and format to allow only numbers and one dot
    const regex = /^(\d+)?(\.\d{0,2})?$/;
    if (regex.test(number)) {
      setQuantity(number);
    }


  }


  const getTodayDate = () => {
    // return string with name of the day (Monday, tuesday...), the day number, and month of today
    const today = new Date();
    const day = today.getDay();
    const dayNumber = today.getDate();
    const month = today.getMonth();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    return `${dayNames[day]}, ${dayNumber} ${monthNames[month]}`;
  }
  navigation.setOptions({
    headerLeft: () => (
      <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>{getTodayDate()}</Text>
      </View>
    ),
    headerRight: () => (
      <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", }}>
        <Pressable
          onPress={handleRemove}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            marginRight: 10
          })}
        >
          <FontAwesome name="calendar" size={25} color={"#fff"} />
        </Pressable>
        <View style={{ borderWidth: 1, borderColor: "#fff", height: 30, marginRight: 5, marginLeft: 5 }}></View>
        <Pressable
          onPress={handleRemove}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            marginLeft: 10
          })}
        >
          <FontAwesome name="camera" size={25} color={"#fff"} style={{ marginRight: 15 }} />
        </Pressable>
      </View>
    ),
  });
  return (
    <StyledView style={styles.container}>
      <Text style={styles.title}></Text>
      <TextInput
        placeholder={`Quantity`}
        value={quantity}
        keyboardType='numeric'
        style={[styles.input, { borderWidth: 1, borderColor: '#fff', borderRadius: 5, backgroundColor: '#000' }]}
        onChangeText={formatNumber}
      />
      <StyledView style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    lineHeight: 0,
    padding: 20,
    width: "100%",
    color: '#fff'
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
