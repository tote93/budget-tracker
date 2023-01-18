import { StyleSheet } from 'react-native';

import { StyledView } from '../components/Themed';
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
        <StyledView style={styles.container}>
            <StyledView style={styles.colorPickerContainer}>
                <ColorPicker
                    color={selectedColor}
                    discrete={false}
                    onColorChangeComplete={(color) => setSelectedColor(color)}
                    row={false}
                    sliderSize={20}
                    discreteLength={100}
                />
            </StyledView>
            <Button title="Save" onPress={handleSave} style={{ width: '100%', }} />
        </StyledView>
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
