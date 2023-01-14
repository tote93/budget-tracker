import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import InitialConfigScreen from './screens/InitialConfigScreen';
import { getStoredData } from './utils/utils';
const INITIAL_CONFIG_KEY = 'initial-config';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [initialConfig, setInitialConfig] = React.useState(null);

  React.useEffect(() => {
    async function checkInitialConfig() {
      try {
        const initialConfig = await getStoredData(INITIAL_CONFIG_KEY);
        if (initialConfig) {
          setInitialConfig(JSON.parse(initialConfig));
        }
      } catch (e) {
        console.log(e);
      }
    }
    checkInitialConfig();
  }, []);

  if (!isLoadingComplete) {
    return null;
  }
  else if (!initialConfig) {
    return <InitialConfigScreen setInitialConfig={setInitialConfig} />;
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
