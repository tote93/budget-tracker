import { useState } from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { Icon, ListItem } from "react-native-elements";
export default function Categories({ navigation, categoryList, title }: { navigation: any, categoryList: object[], title: string, }) {
    const handleEdit = (category: any) => {
        navigation.navigate('EditCategory', { category, name: 'Edit ' + category.name })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <ScrollView style={styles.scrollView}>
                {categoryList.map((category: any, index: number) => (
                    <View key={category.id}>
                        <ListItem bottomDivider>
                            <Icon type={category.type} name={category.icon} color={"#fff"} style={{ borderRadius: 50, backgroundColor: category.color, padding: 10 }} />
                            <ListItem.Content >
                                <ListItem.Title style={styles.title}>{category.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron onPress={() => handleEdit(category)} type='entypo' name='edit' size={30} color="orange"></ListItem.Chevron>
                        </ListItem>
                    </View>
                ))
                }
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});
