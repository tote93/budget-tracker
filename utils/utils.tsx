import AsyncStorage from '@react-native-async-storage/async-storage';
export const INITIAL_CONFIG_KEY = 'initial-config';
export const INCOMES_KEY = 'incomes-config';
export const EXPENSES_KEY = 'expenses-config';

export const expenseCategories = [
    { id: 1, name: 'Food', icon: 'fastfood', color: '#f9a825', type: "material-icons" },
    { id: 2, name: 'Transport', icon: 'car', color: '#487b7d', type: "ant-design" },
    { id: 3, name: 'Shopping', icon: 'shoppingcart', color: '#D23529', type: "ant-design" },
    { id: 4, name: 'Bills', icon: 'money-bill-alt', color: '#2539EC', type: "font-awesome-5" },
    { id: 5, name: 'Entertainment', icon: 'headphones-alt', color: '#68DE16', type: "font-awesome-5" },
    { id: 6, name: 'Health', icon: 'hearto', color: "#cd1fe0", type: "ant-design" },
    { id: 7, name: 'Education', icon: 'book', color: "#a233d5", type: "font-awesome-5" },
    { id: 8, name: 'Gifts', icon: 'gift', color: "#fb0ad0", type: "ant-design" },
]
export const incomesCategories = [
    { id: 1, name: 'Salary', icon: 'attach-money', color: '#46F106', type: "material-icons" },
    { id: 2, name: 'Investments', icon: 'chart-line', color: '#389CEE', type: "font-awesome-5" },
    { id: 3, name: 'Savings', icon: 'piggy-bank', color: '#ffaaff', type: "font-awesome-5" },
    { id: 4, name: 'Gifts', icon: 'gift', color: '#f9a825', type: "ant-design" },
]

export const initialiceCategories = async () => {
    storeData(INCOMES_KEY, incomesCategories);
    storeData(EXPENSES_KEY, expenseCategories);
}


export const storeData = async (name: string, data: unknown) => {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(data));
        console.log("Saved item:", { name, })
    } catch (e) {
        console.log("Error during save item:", { e, name, data });
    }
}
export const getStoredData = async (name: string) => {
    try {
        const value = await AsyncStorage.getItem(name);
        if (value !== null) {
            return JSON.parse(value);
        } return null;
    } catch (e) {
        console.log("Error during get item:", { e, name });
    }
}
export const removeStoredData = async (name: string) => {
    try {
        await AsyncStorage.removeItem(name);
        console.log("Removed item:", name)
    } catch (e) {
        console.log("Error during remove item:", { e, name });
    }
}

export const removeAllData = async () => {
    try {
        await AsyncStorage.clear();
        console.log("All items removed")
    } catch (e) {
        console.log("Error during remove all items:", e);
    }
}

export const updateStoredData = async (name: string, data: unknown) => {
    try {
        await removeStoredData(name);
        await storeData(name, data);
    } catch (e) {
        console.log("Error during update item:", { e, name, data });
    }
}