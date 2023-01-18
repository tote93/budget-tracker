import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Text, StyledView } from './Themed';
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
        route.params.removeItem(category)
        close();
    }
    const handleCategoryIcon = () => {
        navigation.navigate('IconPickerModal', { title: "Category Icon Picker", setIcon: handleIconFormat, icon: iconName, type: category.type })
    }

    const handleColorPicker = () => {
        navigation.navigate('ColorPickerModal', { color: color, title: "Category Color Picker", setColor: setColor })
    }
    const updateCategory = () => {
        route.params.updateItem({ id: category.id, name: categoryName, color: color, icon: iconName, type: iconType })
        close();
    }
    const close = () => {
        navigation.goBack()
    }
    return (
        <StyledView style={styles.container}>
            <View>
                <TextInput
                    placeholder={`Edit ${route.params.name} category name`}
                    value={categoryName}
                    style={[styles.input, { borderWidth: 1, borderColor: '#fff', borderRadius: 5, backgroundColor: '#000' }]}
                    onChangeText={(text) => setCategoryName(text)}
                />
                {/* Text with 'Choose the category icon' */}
                <StyledView style={styles.categoryContainer}>
                    <Text style={styles.title}>Choose the category icon</Text>
                    <Icon type={iconType} name={iconName} onPress={handleCategoryIcon} color={"#fff"} style={{ borderRadius: 50, backgroundColor: color, padding: 5 }} />
                </StyledView>
                {/* Text with 'Choose the category color' */}
                <StyledView style={styles.categoryContainer}>
                    <Text style={styles.title}>Choose the category color</Text>
                    <Icon type={category.type} name={category.icon} onPress={handleColorPicker} color={color} style={{ borderRadius: 50, backgroundColor: color, padding: 5 }} />
                </StyledView>
            </View>
            {/* Button with 'Save' */}
            <Button title="Save" onPress={updateCategory} style={{ width: '100%', }} />
        </StyledView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

        justifyContent: 'space-between',
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
