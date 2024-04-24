import { Keyboard, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Spinner } from "../../components/Spinner";

export default function SignUp() {
    const { signUp } = useContext(AuthContext)
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSignUp = async () => {
        if (!inputs.name || !inputs.email || !inputs.password) return;
        Keyboard.dismiss()
        await signUp(inputs)
    }


    return (
        <>
            <TextInput
                placeholder="Seu nome"
                style={styles.input}
                value={inputs.name}
                onChangeText={(text) => setInputs({ ...inputs, name: text })}
            />

            <TextInput
                placeholder="Seu email"
                autoCapitalize="none"
                style={styles.input}
                value={inputs.email}
                onChangeText={(text) => setInputs({...inputs, email: text})}
            />

            <TextInput
                placeholder="Sua senha"
                secureTextEntry={true}
                style={styles.input}
                value={inputs.password}
                onChangeText={(text) => setInputs({...inputs, password: text})}
            />

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8}
                onPress={handleSignUp}    
            >
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>

        </>
    )
}