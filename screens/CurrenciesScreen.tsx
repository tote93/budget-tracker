import { StatusBar } from 'expo-status-bar';
import { FlatList, Modal, PixelRatio, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { View } from '../components/Themed';
import { useState } from 'react';
import { Button, Icon, Image, Text } from 'react-native-elements';

import * as React from 'react';
import { getStoredData } from '../utils/utils';

export default function CurrenciesScreen({ navigation }) {
    const [selectedCountry, setSelectedCountry]: any = useState(null);
    React.useEffect(() => {
        // get the selected country from async storage using an async function
        const getSelectedCountry = async () => {
            const selectedCountry = await getStoredData('selectedCountry')
            setSelectedCountry(selectedCountry)
        }
        getSelectedCountry()
    }, [])

    const openCurrencyList = () => {
        navigation.navigate("CurrencyList", {
            onSelect: (selectedCountry: any) => {
                setSelectedCountry(selectedCountry)
            }
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.currencyContainer}>
                <Icon type="font-awesome-5" name="coins" color={"#fff"} />
                <Text style={styles.title}>Main Currency</Text>
            </View>
            <Button title="Change Currency" onPress={openCurrencyList} />
            {selectedCountry && <View>
                <Text style={styles.title}>{selectedCountry.name}</Text>
                <Image style={styles.flagItem} source={{ uri: 'data:image/png;base64,' + selectedCountry.flag }} />
            </View>}
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 15,
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ccc',
    }, flagItem: {
        width: 60,
        height: 30,
        resizeMode: 'cover',
        borderColor: '#ccc',
        borderWidth: 1 / PixelRatio.get(),
    },
});
