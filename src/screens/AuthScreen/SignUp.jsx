import { Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function SignUp() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSignUp = async () => {
        if (!inputs.name || !inputs.email || !inputs.password) return;

        console.log(inputs)
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
                style={styles.input}
                value={inputs.email}
                onChangeText={(text) => setInputs({...inputs, email: text})}
            />

            <TextInput
                placeholder="Sua senha"
                style={styles.input}
                value={inputs.password}
                onChangeText={(text) => setInputs({...inputs, password: text})}
            />

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.9}
                onPress={handleSignUp}    
            >
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>

        </>
    )
}