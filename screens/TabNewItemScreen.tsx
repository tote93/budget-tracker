import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, TextInput, View, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Button, Icon } from "react-native-elements";
import { Text, StyledView } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { getStoredData, INITIAL_CONFIG_KEY } from "../utils/utils";

export default function TabNewItemScreen({ navigation }: RootTabScreenProps<"TabAddNewItem">) {
  const [quantity, setQuantity] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("USD");
  const [categoryType, setCategoryType] = React.useState<string>('expenses');

  useEffect(() => {
    fetchConfig();
  }, []);


  const handleRemove = () => {

  }
  const formatNumber = (number: string) => {
    // function that receives an string and format to allow only numbers and one dot
    var re = new RegExp(code, "g");
    let nValue = number.replace(re, "").trim();
    const regex = /^(\d+)?(\.\d{0,2})?$/;
    if (regex.test(nValue)) {
      setQuantity(nValue);
    }
  }
  const fetchConfig = async () => {
    //await initialiceCategories();
    const config = await getStoredData(INITIAL_CONFIG_KEY)
    setCode(config.currency.currency.code)
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
  const saveItem = () => {
    // save the new item
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1, }}>
          <TextInput
            placeholder={`Quantity`}
            value={code + " " + quantity}
            keyboardType='numeric'
            style={[styles.input, { borderWidth: 1, borderColor: '#fff', borderRadius: 5, backgroundColor: '#000', width: "100%", color: '#fff' }]}
            onChangeText={formatNumber}
          />
          <View style={{ padding: 5 }}>
            <Text style={styles.title}>Category</Text>
            <TouchableOpacity
              style={[
                styles.button,
                categoryType === 'expenses' && styles.selectedButton
              ]}
              onPress={() => setCategoryType('expenses')}
            >
              <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Text>Expenses</Text>
                <Text>{categoryType === "expenses" && <Icon type="entypo" name="check" color="#f9a825" />}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                categoryType === 'incomes' && styles.selectedButton
              ]}
              onPress={() => setCategoryType('incomes')}
            >
              <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Text>Incomes</Text>
                <Text>{categoryType === "incomes" && <Icon type="entypo" name="check" color="#f9a825" />}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <StyledView style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

          {/* Button with 'Save' */}
          <Button title="Create" onPress={saveItem} style={{ width: '100%', alignSelf: "flex-end", padding: 10 }} />
        </View>

      </TouchableWithoutFeedback>


    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    lineHeight: 0,
    padding: 20,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  }, button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    backgroundColor: 'gray',
  },
  selectedButton: {
    backgroundColor: '#0C8266',
  },
});
