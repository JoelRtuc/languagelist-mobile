import { View, Text, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react";
import { StyleSheet } from 'react-native';
import { FlatList } from "react-native";

const API_URL = "http://192.168.1.236:5165/api/LanguageBases"

    export default function TaskListScreen({navigation}){   

        const [languages, setLanguages] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setLanguages(data))
            .catch(() => setError("Något blev fel"))
            .finally(() => setLoading(false));
        }, []);

        if (error) return <Text>{error}</Text>;

        if (loading) return <Text>Laddar...</Text>;

        return(
            <View style={styles.container}>
            <Text style={styles.header}>Språk</Text>
            <FlatList 
            data={languages}
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({item}) => (<TouchableOpacity style={styles.taskItem}
            onPress={()=> navigation.navigate("TaskDetail", {languages: item})}> <Text>{item.languageName}</Text> </TouchableOpacity>)} />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, backgroundColor: "#f5f"},
    header: {fontSize: 22, fontWeight: "bold", marginBottom: 12},
    taskItem: {padding: 12, margin: 8, backgroundColor: "rgba(9, 144, 255, 0.97)", borderRadius: 8}
})