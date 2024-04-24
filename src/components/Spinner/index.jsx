import { ActivityIndicator, View } from "react-native"
import { styles } from "./styles"

export const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
    )
}