
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { countries } from '../utils/countries';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import FastImage from 'expo-fast-image'
import Ionicons from 'react-native-vector-icons/Ionicons';

function CurrencyList() {
    const [countriesList, setCountriesList] = useState(countries);
    const [_, setSearch] = useState('')

    const searchCountry = (text: string) => {
        // filter the countries based on the search text by country name or by the currency name
        const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(text.toLowerCase()) || country.currency.name.toLowerCase().includes(text.toLowerCase()) || country.currency.code.toLowerCase().includes(text.toLowerCase()))
        setSearch(text)
        setCountriesList(filteredCountries)
    }
    const getCurrencyLabel = (item: any, displaySymbol: boolean = true) => {
        return `(${item.currency.code}) ${item.currency.symbol && displaySymbol ? item.currency.symbol : ''}`
    }
    return (
        <View >
            <SelectDropdown
                data={countriesList}
                defaultValueByIndex={199}
                onSelect={(selectedItem, index) => {
                    return selectedItem
                }}
                defaultButtonText={'Prefered currency'}
                buttonTextAfterSelection={(item, index) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                buttonStyle={styles.dropdownButtonStyle}
                buttonTextStyle={styles.dropdownButtonTextStyle}
                renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdownStyle}
                rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.dropdownRowTextStyle}
                selectedRowStyle={styles.dropdownSelectedRowStyle}
                search
                searchInputStyle={styles.dropdownSearchInputStyle}
                searchPlaceHolder={'Search by country or currency'}
                onChangeSearchInputText={searchCountry}
                searchPlaceHolderColor={'darkgrey'}
                renderSearchInputLeftIcon={() => {
                    return <FontAwesome name={'search'} color={'#444'} size={18} />;
                }}
                renderCustomizedRowChild={(item, index) => {
                    return (
                        <View style={styles.dropdownRenderedViewStyle}>
                            <FastImage cacheKey={item.id} source={{ uri: 'data:image/png;base64,' + item.flag }} style={styles.dropdownRowImageStyle} />

                            <View style={styles.dropdownCountryInfoStyle}>
                                <Text style={styles.dropdownRowTextItemStyle}>{item.name}</Text>
                                <Text style={styles.dropdownRowTextItemStyle}>{getCurrencyLabel(item)}</Text>
                            </View>
                        </View>
                    );
                }}
                renderCustomizedButtonChild={(selectedItem, index) => {
                    return (
                        <View style={styles.dropdownRenderedViewStyle}>
                            <Text style={styles.dropdownSelectedRowTextStyle}>{selectedItem ? selectedItem.currency.code + " - " + selectedItem.name : 'Select country'}</Text>
                        </View>
                    );
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdownButtonTextStyle: { color: '#444', textAlign: 'left' },
    dropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdownRowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5', height: 80 },
    dropdownRowTextStyle: { color: '#444', textAlign: 'left' },
    dropdownSelectedRowStyle: { backgroundColor: 'rgba(0,0,0,0.1)' },
    dropdownSearchInputStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    dropdownSelectedRowTextStyle: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    dropdownRenderedViewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "white",
        paddingHorizontal: 18,
        color: '#000',
    },
    dropdownRowImageStyle: { width: 65, height: 45, resizeMode: 'cover', borderRadius: 4, borderColor: '#444', borderWidth: 1 },
    dropdownRowTextItemStyle: {
        color: '#111',
        textAlign: 'center',
        fontSize: 16,
        marginHorizontal: 12,
    },
    dropdownCountryInfoStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: "transparent",
    }
});

export default CurrencyList