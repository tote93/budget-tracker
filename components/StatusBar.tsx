import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

function StatusBarComponent() {
    return (
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    )
}

export default StatusBarComponent