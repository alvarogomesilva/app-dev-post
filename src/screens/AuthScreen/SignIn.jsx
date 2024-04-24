import { Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function SignIn() {
    return (
        <>
            <TextInput
                placeholder="Seu email"
                style={styles.input}
            />

            <TextInput
                placeholder="Sua senha"
                style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>

        </>
    )
}