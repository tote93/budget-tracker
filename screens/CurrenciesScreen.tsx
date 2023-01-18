
import { StyleSheet, } from 'react-native';
import Constants from 'expo-constants';
import { StyledView } from '../components/Themed';
import { useState } from 'react';
import * as React from 'react';
import { getStoredData, INITIAL_CONFIG_KEY, updateStoredData } from '../utils/utils';
import CurrencyList from '../components/CurrencyList';

export default function CurrenciesScreen({ navigation }: any) {
    const [info, setInfo]: any = useState(null);
    React.useEffect(() => {
        // get the selected country from async storage using an async function
        const getSelectedCountry = async () => {
            const info = await getStoredData(INITIAL_CONFIG_KEY)
            setInfo(info)

        }
        getSelectedCountry()
    }, [])

    const handleSelectCurrency = async (selectedCurrency: any) => {
        const dataUpdated = {
            ...info,
            currency: selectedCurrency
        }
        await updateStoredData(INITIAL_CONFIG_KEY, dataUpdated)
    }

    return (
        <StyledView style={styles.container}>
            {info && <CurrencyList selectCurrency={handleSelectCurrency} selection={info.currency.index || 199} />}
        </StyledView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        width: '100%',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 15,
    },
});
