import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { StyledView } from './Themed';
import { Icon, ListItem } from "react-native-elements";
import { EXPENSES_KEY, INCOMES_KEY, updateStoredData } from '../utils/utils';
import { FontAwesome } from '@expo/vector-icons';

export default function Categories({ navigation, categoryList, title, type, icon }: { navigation: any, categoryList: object[], title: string, type: string, icon: string }) {
    const [categories, setCategories] = useState([...categoryList])
    const [expanded, setExpanded] = useState(false)
    const handleEdit = (category: any) => {
        navigation.navigate('EditCategory', { action: "edit", category, name: 'Edit ' + category.name, removeItem: handleDelete, updateItem: handleUpdate })
    }
    useEffect(() => {
        setCategories([...categoryList])
    }, [categoryList])
    const handleDelete = (category: any) => {
        const newCategories = categories.filter((item: any) => item.id !== category.id)
        setCategories(newCategories);
        if (type === "expenses") updateStoredData(EXPENSES_KEY, newCategories);
        else updateStoredData(INCOMES_KEY, newCategories);
    }
    const handleUpdate = async (category: any) => {
        const newCategories = categories.map((item: any) => {
            if (item.id === category.id) {
                item.name = category.name;
                item.icon = category.icon;
                item.color = category.color;
                item.type = category.type;
                return category
            }
            return item
        })
        setCategories(newCategories);
        if (type === "expenses") await updateStoredData(EXPENSES_KEY, newCategories);
        else await updateStoredData(INCOMES_KEY, newCategories);
    }
    const handleAdd = () => {
        navigation.navigate('EditCategory', { action: "add", name: 'Add new category', createitem: handleCreate })
    }
    const handleCreate = async (category: any) => {
        const typeCategory = category.categoryType === "expenses" ? "expenses" : "incomes";
        delete category.categoryType;
        category.id = categories.length + 1;
        const newCategories = [...categories, category];
        setCategories(newCategories);
        if (typeCategory === "expenses") await updateStoredData(EXPENSES_KEY, newCategories);
        else await updateStoredData(INCOMES_KEY, newCategories);
    }

    // Add a button to the header to add new item
    navigation.setOptions({
        headerRight: () => (
            <Pressable
                onPress={handleAdd}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                })}
            >
                <FontAwesome name="plus" size={20} color={"#fff"} />
            </Pressable>
        ),
    });


    return (
        <StyledView style={styles.container}>
            <ListItem.Accordion
                content={
                    <>
                        <Icon name={icon} type="font-awesome-5" size={30} color={type === "expenses" ? '#ff3300' : "#ffaaff"} />
                        <ListItem.Content style={{ color: "#111", position: "relative" }}>
                            <ListItem.Title style={styles.listTitle}>{title}  ({categories.length})</ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
            >
                <ScrollView style={styles.scrollView}>
                    {categories.map((category: any, index: number) => (
                        <StyledView key={category.id}>
                            <ListItem bottomDivider>
                                <Icon type={category.type} name={category.icon} color={"#fff"} style={{ borderRadius: 50, backgroundColor: category.color, padding: 10 }} />
                                <ListItem.Content >
                                    <ListItem.Title style={styles.title}>{category.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron onPress={() => handleEdit(category)} type='entypo' name='edit' size={30} color="orange"></ListItem.Chevron>
                            </ListItem>
                        </StyledView>
                    ))
                    }
                </ScrollView>
            </ListItem.Accordion>

        </StyledView >
    );
}

const styles = StyleSheet.create({
    container: {

        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        height: 2,
        width: '80%',
        marginBottom: 20,
        color: '#fff'
    },
    scrollView: {
        marginHorizontal: 0,
    },
    categoryIcon: {
        marginRight: 10,
        borderRadius: 50
    },
    listTitle: {
        fontSize: 20,
        marginLeft: 10,
    }
});
