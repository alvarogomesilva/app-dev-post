import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { useState } from "react";

export default function HomeScreen() {
    const navigation = useNavigation()
    const [posts, setPosts] = useState([
        { id: '1', content: 'TEstes' },
        { id: '2', content: 'TEstes' },
        { id: '3', content: 'TEstes' },
        { id: '4', content: 'TEstes' }
    ])

    return (
        <View style={styles.container}>
            <Header />

            <FlatList 
                style={styles.flatlist}
                data={posts}
                renderItem={({ item }) => (<Text>Teste</Text>)}
            
            />

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('NewPostScreen')}
            >
                <Feather name="edit-2" style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}