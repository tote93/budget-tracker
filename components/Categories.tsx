import { useState } from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { Icon, ListItem } from "react-native-elements";
export default function Categories({ categoryList, title }: { categoryList: object[], title: string }) {
    const getColorRow = (color: string) => {
        return { backgroundColor: color }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <ScrollView style={styles.scrollView}>
                {categoryList.map((category: any) => (
                    <View key={category.id} style={getColorRow(category.color)}>
                        <ListItem bottomDivider >
                            <Icon type={category.type} name={category.icon} color={category.color} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.title}>{category.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron type='entypo' name='edit' size={30} color="orange"></ListItem.Chevron>
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
});
