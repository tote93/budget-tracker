import * as React from 'react'
import { Text, StyledView } from './Themed'
import Constants from 'expo-constants';
import { PixelRatio, StyleSheet, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function DayFormat({ selectDayFormat }: { selectDayFormat: any }) {
    const [selectedMode, setSelectedMode] = React.useState(0)

    const handleSelectedMode = (mode: number) => {
        setSelectedMode(mode)
        selectDayFormat(mode === 0 ? "monday" : "sunday")
    }

    return (
        <StyledView style={styles.container}>
            <Text style={styles.title}>First day of the week:</Text>
            <StyledView style={styles.numberMainContainer}>
                <TouchableHighlight style={[styles.numberContainer, selectedMode == 0 && styles.highLightItem]} onPress={() => handleSelectedMode(0)}>
                    <StyledView style={styles.touchContainer}>
                        <Text style={[styles.numberText, selectedMode === 0 && styles.highLightText]}>Monday
                        </Text>
                        {selectedMode == 0 && <AntDesign name="checkcircleo"
                            style={{ color: "#FFFFFF", marginLeft: 10 }}
                            size={20} />}
                    </StyledView>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.numberContainer, selectedMode === 1 && styles.highLightItem]} onPress={() => handleSelectedMode(1)}>
                    <StyledView style={styles.touchContainer}>
                        <Text style={[styles.numberText, selectedMode === 1 && styles.highLightText]}>Sunday
                        </Text>
                        {selectedMode == 1 && <AntDesign name="checkcircleo"
                            style={{ color: "#FFFFFF", marginLeft: 10 }}
                            size={20} />}
                    </StyledView>
                </TouchableHighlight>
            </StyledView >
        </StyledView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    title: {
        fontSize: 17,
        color: '#fff',
    },
    touchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "transparent"
    },
    numberText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    numberCurrency: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    numberMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        flex: 0.5,
        paddingRight: 20,
        paddingLeft: 20,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#ccc',
    },
    numberSeparator: {
        color: "red",
        fontSize: 18,
        fontWeight: 'bold',
    },
    highLightItem: {
        backgroundColor: 'rgba(100, 240, 0 ,.75)',
    },
    highLightText: {
        color: '#111',
    }
});
export default DayFormat