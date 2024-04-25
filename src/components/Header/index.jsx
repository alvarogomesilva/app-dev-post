import { SafeAreaView, Text, View } from "react-native"
import { styles } from "./styles"

export const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Dev<Text style={styles.logo}>Post</Text></Text>
        </SafeAreaView>
    )
}