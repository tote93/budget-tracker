import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (name: string, data: Object) => {
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