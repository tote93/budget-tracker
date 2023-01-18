
import { FlatList, Modal, PixelRatio,  StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, StyledView } from '../components/Themed';
import { countries } from '../utils/countries';
import { useState } from 'react';
import Constants from 'expo-constants';
import { storeData } from '../utils/utils';

function CurrencyList({ route, navigation }: ) {
    const [countriesList, setCountriesList] = useState(countries);
    const [_, setSelectedCountry] = useState();
    const [search, setSearch] = useState('')
    const handleSelectCountry = async (country: any) => {
        setSelectedCountry(country);
        // store data in async storage
        await storeData('selectedCountry', country)
        // close the modal
        route.params.onSelect(country)
        navigation.goBack()
    }

    const getCurrencyItem = (item: any) => {
        if (item.currency.symbol || item.currency.code) return `(${item.currency.symbol || item.currency.code})`
        else return null
    }
    const searchCountry = (text: string) => {
        // filter the countries based on the search text by country name or by the currency name
        const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(text.toLowerCase()) || country.currency.name.toLowerCase().includes(text.toLowerCase()))
        setSearch(text)
        setCountriesList(filteredCountries)
    }
    return (
        <StyledView style={styles.modalContainer}>
            <StyledView style={styles.searchContainer}>
                {/*     <Image source={require('./lupa.png')} style={styles.searchIcon} /> */}
                <TextInput
                    style={styles.searchInput}
                    value={search}
                    autoFocus
                    onChangeText={searchCountry}
                    placeholder="Search country by name or currency"
                    placeholderTextColor="#BDBDBD"
                />
            </StyledView>
            <FlatList
                data={countriesList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectCountry(item)}>
                        <StyledView style={styles.countryView}>
                            <Text style={styles.title}>{item.name} {getCurrencyItem(item)}</Text>
                            {/*  <FastImage cacheKey={item.id} source={{ uri: 'data:image/png;base64,' + item.flag }} style={styles.flagItem} /> */}
                        </StyledView>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </StyledView>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    flagItem: {
        width: 60,
        height: 30,
        resizeMode: 'cover',
        borderColor: '#ccc',
        borderWidth: 1 / PixelRatio.get(),
    },
    modalContainer: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        height: '100%',
    },
    countryView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1 / PixelRatio.get(),
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    searchInput: {
        flex: 1,
        color: '#000',
        padding: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
});

export default CurrencyList