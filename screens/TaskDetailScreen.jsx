import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import Bread from "../assets/eu-c-03.png"

export default function TaskDetailScreen({route}){//{uri: ''} for webimages

    const {language} = route.params;

    return(
        <View style={styles.container}>
            <Image source={Bread} style={styles.img} />

            <Text style={styles.title}>
                {language.languageName}
            </Text>
            <View style={styles.card}>
                <Text>
                {language.languageDescription}
                </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    card: {
        backGroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px #000'
    },
    img: {
        width: 500,
        height: 500,
        resizeMode: 'contain'
    }
})