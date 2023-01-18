import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Categories from '../components/Categories';
import { Text, StyledView } from '../components/Themed';
import { EXPENSES_KEY, getStoredData, INCOMES_KEY, initialiceCategories, removeAllData } from '../utils/utils';

export default function CategoriesScreen({ navigation }: any) {
    const [expenseCategories, setExpenseCategories] = useState([])
    const [incomeCategories, setIncomeCategories] = useState([])

    const fetchCategories = async () => {
        //await initialiceCategories();
        const expenses = await getStoredData(EXPENSES_KEY)
        const incomes = await getStoredData(INCOMES_KEY)
        setExpenseCategories(expenses)
        setIncomeCategories(incomes)
    }
    useEffect(() => {
        const fetchData = async () => {
            await fetchCategories()
        }
        fetchData()
    }, [])

    return (
        <StyledView style={styles.container}>
            <Categories categoryList={expenseCategories} title="Expenses Categories" type="expenses" icon="money-bill-alt" navigation={navigation} />
            <Categories categoryList={incomeCategories} title="Incomes Categories" type="incomes" icon="piggy-bank" navigation={navigation} />
        </StyledView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
