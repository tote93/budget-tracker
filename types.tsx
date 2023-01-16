/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  InitialConfig: undefined;
  Modal: undefined;
  IconPickerModal: undefined;
  ColorPickerModal: undefined;
  EditCategory: undefined;
  NotFound: undefined;
  Categories: undefined,
  Currencies: undefined,
  Settings: undefined,
  CategoriesComponent: undefined,
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabHome: undefined;
  TabStats: undefined;
  TabAccounts: undefined;
  TabAddNewItem: undefined;
  TabSettings: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>, NativeStackScreenProps<RootStackParamList>>;
