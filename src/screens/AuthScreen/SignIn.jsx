import { Keyboard, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function SignIn() {
    const { signIn } = useContext(AuthContext)
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const handleSignIn = async () => {
        if (!inputs.email || !inputs.password) return
        Keyboard.dismiss()
        await signIn(inputs)
    }

    return (
        <>
            <TextInput
                placeholder="Seu email"
                autoCapitalize="none"
                style={styles.input}
                value={inputs.value}
                onChangeText={(text) => setInputs({ ...inputs, email: text })}
            />

            <TextInput
                placeholder="Sua senha"
                secureTextEntry={true}
                style={styles.input}
                value={inputs.password}
                onChangeText={(text) => setInputs({ ...inputs, password: text })}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleSignIn}
                activeOpacity={0.8}
            >
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

        </>
    )
}