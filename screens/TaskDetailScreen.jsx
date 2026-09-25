import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import Bread from "../assets/unnamed.webp"

export default function TaskDetailScreen(){//{uri: ''} for webimages

    return(
        <View style={styles.container}>
            <Image source={Bread} style={styles.img} />

            <Text style={styles.title}>
                Detail
            </Text>
            <Text>
                Screen
            </Text>

            <View style={styles.card}>
                <Text>
                    This is a card
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
        width: 5,
        height: 5,
        resizeMode: 'contain'
    }
})