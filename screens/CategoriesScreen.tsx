import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Categories from '../components/Categories';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { EXPENSES_KEY, getStoredData, initialiceCategories, removeAllData } from '../utils/utils';

export default function CategoriesScreen() {
    const [expenseCategories, setExpenseCategories] = useState([])
    const [incomeCategories, setIncomeCategories] = useState(null)

    const fetchCategories = async () => {
        const expenses = await getStoredData(EXPENSES_KEY)
        setExpenseCategories(expenses)
        await initialiceCategories();
    }
    useEffect(() => {
        const fetchData = async () => {
            await fetchCategories()
        }
        fetchData()
    }, [])


    return (
        <View style={styles.container}>
            <Categories categoryList={expenseCategories} title="Expense Categories" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
