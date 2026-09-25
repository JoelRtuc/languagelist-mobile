import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import Bread from "../assets/eu-c-03.png"
import { BASE_URL } from "../api";

export default function TaskDetailScreen({route}){//{uri: ''} for webimages

    const {language} = route.params;

    return(
        <View style={styles.container}>
            <View style={styles.mapWrapper}>
                <Image source={Bread} style={[styles.img, styles.mainMap]} />
                <Image source={{
                uri: `${BASE_URL}${language.greenImg}`,
                }} style={[styles.img, styles.colorMaps]} />
            </View>
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
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px #000'
    },
    mapWrapper: {
        position: 'relative',
        width: 500,
        height: 500
    },
    img: {
        width: 500,
        height: 500
    },
    mainMap: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    colorMaps: {
        position: 'absolute',
        top: 0,
        left: 0
    }
})