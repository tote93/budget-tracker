/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { FontAwesome, AntDesign, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeTab from "../screens/TabHomeScreen";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import TabSettingsScreen from "../screens/TabSettingsScreen";
import TabAccountsScreen from "../screens/TabAccountsScreen";
import TabNewItemScreen from "../screens/TabNewItemScreen";
import TabStatsScreen from "../screens/TabStatsScreen";
import CurrenciesScreen from "../screens/CurrenciesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CurrencyList from "../components/CurrencyList";
import EditCategory from "../components/EditCategory";
import IconPickerModal from "../components/IconPickerModal";
import ColorPickerModal from "../components/ColorPickerModal";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="EditCategory" options={{ title: "EditCategory" }} component={EditCategory} />
        <Stack.Screen name="IconPickerModal" options={{ title: "IconPickerModal" }} component={IconPickerModal} />
        <Stack.Screen name="ColorPickerModal" options={{ title: "ColorPickerModal" }} component={ColorPickerModal} />
      </Stack.Group>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Currencies" component={CurrenciesScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarInactiveBackgroundColor: Colors[colorScheme].tabUnselected,
        tabBarActiveBackgroundColor: Colors[colorScheme].tabUnselected,
        /*   headerShown: false, */
      }}
    >
      <BottomTab.Screen
        name="TabHome"
        component={HomeTab}
        options={({ navigation }: RootTabScreenProps<"TabHome">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome name="info-circle" size={25} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
            </Pressable>
          ),
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#000",
          },
        })}
      />
      <BottomTab.Screen
        name="TabStats"
        component={TabStatsScreen}
        options={{
          title: "Stats",
          tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={24} color={color} />,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />
      <BottomTab.Screen
        name="TabAddNewItem"
        component={TabNewItemScreen}
        options={({ navigation }: RootTabScreenProps<"TabAddNewItem">) => ({
          title: "",
          tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" style={{ color: "#0BFB9D", zIndex: 99, position: "absolute", backgroundColor: "#111" }} size={55} />,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#000",
          },
        })}
      />
      <BottomTab.Screen
        name="TabAccounts"
        component={TabAccountsScreen}
        options={{
          title: "Accounts",
          tabBarIcon: ({ color }) => <Ionicons name="wallet-sharp" size={24} color={color} />,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />
      <BottomTab.Screen
        name="TabSettings"
        component={TabSettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
