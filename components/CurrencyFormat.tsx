import * as React from 'react'
import { Text, View } from './Themed'
import Constants from 'expo-constants';
import { PixelRatio, StyleSheet, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

function CurrencyFormat() {
    const [selectedMode, setSelectedMode] = React.useState(0)
    const [currenciesItems, setCurrenciesItems] = React.useState()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Currency Format</Text>
            <View style={styles.numberMainContainer}>
                <TouchableHighlight style={[styles.numberContainer, selectedMode == 0 && styles.highLightItem]} onPress={() => setSelectedMode(0)}>
                    <View style={styles.touchContainer}>
                        <Text style={styles.numberText}>33<Text style={styles.numberSeparator}>.</Text>123,33
                            <Text style={styles.numberCurrency}> $</Text>
                        </Text>
                        {selectedMode == 0 && <AntDesign name="checkcircleo"
                            style={{ color: "#0BFB9D", marginLeft: 10 }}
                            size={20} />}
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.numberContainer, selectedMode === 1 && styles.highLightItem]} onPress={() => setSelectedMode(1)}>
                    <View style={styles.touchContainer}>
                        <Text style={styles.numberText}>33,123<Text style={styles.numberSeparator}>.</Text>33
                            <Text style={styles.numberCurrency}> $</Text>
                        </Text>
                        {selectedMode == 1 && <AntDesign name="checkcircleo"
                            style={{ color: "#0BFB9D", marginLeft: 10 }}
                            size={20} />}
                    </View>
                </TouchableHighlight>
            </View >
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
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
        color: '#fff',
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    highLightItem: {
        backgroundColor: 'rgba(100, 240, 0 ,.4)',
    },
});
export default CurrencyFormat