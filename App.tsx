import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import InitialConfigScreen from './screens/InitialConfigScreen';
import { getStoredData, initialiceCategories, INITIAL_CONFIG_KEY, removeAllData, storeData } from './utils/utils';
import StatusBar from './components/StatusBar';



export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [initialConfig, setInitialConfig] = React.useState();
  const [storedData, setStoredData] = React.useState(false);

  React.useEffect(() => {
    async function checkInitialConfig() {
      try {
        const initialConfig = await getStoredData(INITIAL_CONFIG_KEY);
        if (initialConfig) {
          setStoredData(true);
          setInitialConfig(initialConfig);
        }
      } catch (e) {
        console.log(e);
      }
    }
    checkInitialConfig();
  }, []);
  React.useEffect(() => {
    async function storeInitialConfig() {
      try {
        console.log("Trying to save initial config:", initialConfig);
        await storeData(INITIAL_CONFIG_KEY, initialConfig);
        await initialiceCategories();
      } catch (e) {
        console.log(e);
      }
    }
    // check if object initialConfig is empty
    if (initialConfig && !storedData) storeInitialConfig()
  }, [initialConfig]);

  if (!isLoadingComplete) {
    return null;
  }
  else if (!initialConfig) {
    return <InitialConfigScreen setInitialConfig={setInitialConfig} selection={199} />;
  }
  else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
