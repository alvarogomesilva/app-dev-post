import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useContext, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getDownloadURL, ref } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { firestore, storage } from '../../firebase/firebaseConfig';
import { AuthContext } from "../../contexts/AuthContext";
import { Spinner } from '../../components/Spinner'

export default function NewPostScreen() {
    const { user } = useContext(AuthContext)
    const navigation = useNavigation()
    const [post, setPost] = useState("")
    const [loading, setLoading] = useState(false)

    useLayoutEffect(() => {

        const options = navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={styles.button}
                    onPress={handlePost}
                    activeOpacity={0.8}
                >
                    <Text style={styles.text}>Compartilhar</Text>
                </TouchableOpacity>
            )
        })

    }, [navigation, post])

    async function handlePost() {
        if (!post) return;
        setLoading(true)
        try {
            let avatarUrl = null;
            let response = await getDownloadURL(ref(storage, `users/${user?.uid}`))
            if (response != null) {
                avatarUrl = response
            }

        } catch (error) {
            console.log(error)
            avatarUrl = null
        }
        await addDoc(collection(firestore, "posts"), {
            created: new Date(),
            content: post,
            author: user?.nome,
            userId: user?.uid,
            likes: 0,
            avatarUrl
        })

        setLoading(false)
        setPost("")
        //navigation.goBack()

    }

    return (
        <View style={styles.container}>
            {loading && <Spinner />}
            <TextInput
                value={post}
                onChangeText={(text) => setPost(text)}
                autoCorrect={false}
                multiline={true}
                placeholder="O que está acontecendo?"
                style={styles.input}
                placeholderTextColor="#DDDDDD"
                maxLength={300}
            />
        </View>
    )
}