import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import ColorPicker from 'react-native-wheel-color-picker'
import { Button } from 'react-native-elements';
import { useState } from 'react';

export default function ColorPickerModal({ navigation, route }: any) {
    navigation.setOptions({ title: route.params.title });
    const [selectedColor, setSelectedColor] = useState(route.params.color)
    const handleSave = () => {
        route.params.setColor(selectedColor)
        navigation.goBack(null);
    }
    return (
        <View style={styles.container}>
            <View style={styles.colorPickerContainer}>
                <ColorPicker
                    color={selectedColor}
                    discrete={false}
                    onColorChangeComplete={(color) => setSelectedColor(color)}
                    row={false}
                    sliderSize={20}
                    discreteLength={100}
                />
            </View>
            <Button title="Save" onPress={handleSave} style={{ width: '100%', }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    colorPickerContainer:
    {
        flex: 1,
        backgroundColor: '#556CD6',
        width: '100%',
        padding: 20,

    },
});
