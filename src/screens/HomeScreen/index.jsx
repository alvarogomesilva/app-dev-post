import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebaseConfig";

export default function HomeScreen() {
    const { user } = useContext(AuthContext)
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    const [posts, setPosts] = useState([
        { id: '1', content: 'TEstes' },
        { id: '2', content: 'TEstes' },
        { id: '3', content: 'TEstes' },
        { id: '4', content: 'TEstes' }
    ])

    useFocusEffect(
        useCallback(() => {
            let isActive = true

            async function fetchPosts() {
                try {
                    const docRef = collection(firestore, "posts")
                    const q = query(docRef, orderBy("created", "desc"), limit(5));
                    const querySnapshot = await getDocs(q);

                    if (isActive) {
                        setPosts([])
                        const postList = []
                        querySnapshot.docs.map((u) => {
                            postList.push({ ...u.data(), id: u.id })
                        })
                        setPosts(postList)
                        setLoading(false)
                    }

                } catch (error) {
                    console.log(error)
                }
            }

            fetchPosts()
            return () => isActive = false
        }, [])
    )

    return (
        <View style={styles.container}>
            <Header />

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#E52246" />

                </View>
            ) : (
                <FlatList
                    style={styles.flatlist}
                    data={posts}
                    renderItem={({ item }) => (<Text>Teste</Text>)}

                />
            )}

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