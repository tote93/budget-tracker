import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (name: string, data: unknown) => {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(data));
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
        console.log("Item removed:", name)
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
