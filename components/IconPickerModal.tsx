import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconPicker } from '@grassper/react-native-icon-picker';
import { Button, Icon } from "react-native-elements";

export default function IconPickerModal({ navigation, route }: any) {
    const { icon, type } = route.params
    const [selectedIconType, setSelectedIconType] = useState(type);
    const [selectedIconName, setSelectedIconName] = useState(icon);
    navigation.setOptions({ title: route.params.title });
    navigation.setOptions({
        headerRight: () => (
            <Icon type={selectedIconType} color={"#fff"} name={selectedIconName} />
        ),
    });
    const handleSubmit = (id: any, iconName: any, iconSet: any, iconColor: any, backgroundColor: any) => {
        setSelectedIconType(formatIcon(iconColor))
        setSelectedIconName(iconSet)
    };
    const handleSave = () => {
        route.params.setIcon(selectedIconName, selectedIconType)
        navigation.goBack(null);
    }
    const formatIcon = (iconType: any) => {
        switch (iconType) {
            case 'AntDesign':
                return 'antdesign'
            case 'Entypo':
                return 'entypo'
            case 'EvilIcons':
                return 'evilicon'
            case 'Feather':
                return 'feather'
            case 'FontAwesome':
                return 'fontawesome'
            case 'FontAwesome5':
                return 'fontawesome5'
            case 'Fontisto':
                return 'fontisto'
            case 'Foundation':
                return 'foundation'
            case 'Ionicons':
                return 'ionicon'
            case 'MaterialCommunityIcons':
                return 'materialcommunityicon'
            case 'MaterialIcons':
                return 'materialicon'
            case 'Octicons':
                return 'octicon'
            case 'SimpleLineIcons':
                return 'simplelineicon'
            case 'Zocial':
                return 'zocial'
            default:
                return 'fontawesome'
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.iconPickerContainer}>
                <IconPicker
                    searchTitle={'Name'}
                    iconsTitle="Icons"
                    numColumns={6}
                    iconSize={20}
                    iconColor="#fff"
                    backgroundColor='#121212'
                    placeholderText="Search Food, shopping .."
                    placeholderTextColor="#555"
                    onClick={handleSubmit}
                    iconContainerStyle={styles.iconContainer}
                    flatListStyle={styles.flatList}
                    iconDetails={[
                        { family: "AntDesign", color: "blue", icons: ["wallet"] },
                        { family: "Entypo", icons: ["wallet"] },
                        { family: "FontAwesome", icons: ["google-wallet"] },
                        { family: "FontAwesome5", icons: ["wallet"] },
                        { family: "Fontisto", icons: ["wallet"] },
                        {
                            family: "MaterialCommunityIcons",
                            icons: ["wallet-membership"]
                        },
                        { family: "MaterialIcons", icons: ["wallet-travel"] }
                    ]
                    }
                />
            </View>
            <Button title="Save" onPress={handleSave} style={{ width: '100%', marginTop: 10 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: '100%',
        backgroundColor: '#556CD6',
    },
    iconPickerContainer: {
        flex: 1
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 5,
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    flatList: {
        width: "100%"
    }
})