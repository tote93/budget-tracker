import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Text, View } from './Themed';
import { Pressable } from "react-native";
import { FontAwesome, } from "@expo/vector-icons";
import { Button, Icon } from 'react-native-elements';

export default function EditCategory({ route, navigation }: any) {
    // Set the header title on the parent screen using the `navigation.setOptions`
    const { category } = route.params;

    navigation.setOptions({ title: route.params.name });
    navigation.setOptions({
        headerRight: () => (
            <Pressable
                onPress={handleRemove}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                })}
            >
                <FontAwesome name="trash" size={25} color={"#F40157"} style={{ marginRight: 15 }} />
            </Pressable>
        ),
    });
    const [categoryName, setCategoryName] = useState(category?.name);
    const [color, setColor] = useState(category?.color)
    const [iconName, setIconName] = useState(category?.icon)
    const [iconType, setIconType] = useState(category?.type)
    const handleIconFormat = (iconName: string, iconType: string) => {
        setIconName(iconName)
        setIconType(iconType)
    }
    const handleRemove = () => {
        console.log('remove')
    }
    const handleCategoryIcon = () => {
        console.log('category icon')
        navigation.navigate('IconPickerModal', { title: "Category Icon Picker", setIcon: handleIconFormat, icon: iconName, type: category.type })
    }

    const handleColorPicker = () => {
        console.log('category icon')
        navigation.navigate('ColorPickerModal', { color: color, title: "Category Color Picker", setColor: setColor })
    }
    const updateCategory = () => {
        console.log('update category', color, iconName, categoryName)
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={`Edit ${route.params.name} category name`}
                value={categoryName}
                style={[styles.input, { borderWidth: 1, borderColor: '#fff', borderRadius: 5, backgroundColor: '#000' }]}
                onChangeText={(text) => setCategoryName(text)}
            />
            {/* Text with 'Choose the category icon' */}
            <View style={styles.categoryContainer}>
                <Text style={styles.title}>Choose the category icon</Text>
                <Icon type={iconType} name={iconName} onPress={handleCategoryIcon} color={"#fff"} style={{ borderRadius: 50, backgroundColor: color, padding: 5 }} />
            </View>
            {/* Text with 'Choose the category color' */}
            <View style={styles.categoryContainer}>
                <Text style={styles.title}>Choose the category color</Text>
                <Icon type={category.type} name={category.icon} onPress={handleColorPicker} color={color} style={{ borderRadius: 50, backgroundColor: color, padding: 5 }} />
            </View>
            {/* Button with 'Save' */}
            <Button title="Save" onPress={updateCategory} style={{ width: '100%', }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
    input: {
        borderWidth: 1,
        fontSize: 20,
        lineHeight: 20,
        padding: 20,
        width: "100%",
        color: '#fff'
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
    },
});
