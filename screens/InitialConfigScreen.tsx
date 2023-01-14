import { StatusBar } from 'expo-status-bar';
import { FlatList, Modal, PixelRatio, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { View } from '../components/Themed';
import { useState } from 'react';
import { Button, Icon, Image, Text } from 'react-native-elements';
import * as React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import CurrencyList from '../components/CurrencyList';
import CurrencyFormat from '../components/CurrencyFormat';


export default function InitialConfigScreen({ setInitialConfig }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <AntDesign
                    name="rocket1"
                    style={{ color: "#0BFB9D" }}
                    size={30}
                />
                <Text style={styles.title}>Initial Configuration</Text>
            </View>
            <CurrencyList />
            <CurrencyFormat />
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 15,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ccc',
    },
    flagItem: {
        width: 60,
        height: 30,
        resizeMode: 'cover',
        borderColor: '#ccc',
        borderWidth: 1 / PixelRatio.get(),
    }
});
