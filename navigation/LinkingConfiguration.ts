/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHomeScreen: 'home',
            },
          },
          TabStats: {
            screens: {
              TabStatsScreen: 'stats',
            },
          },
          TabAddNewItem: {
            screens: {
              TabNewItemScreen: 'new-item',
            },
          },
          TabAccounts: {
            screens: {
              TabAccountsScreen: 'accounts',
            },
          },
          TabSettings: {
            screens: {
              TabSettingsScreen: 'settings',
            },
          },
        },
      },
      CurrencyList: "currencyList",
      InitialConfig: "initialConfig",
      Categories: "categories",
      Currencies: "currencies",
      Settings: "settings",
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
