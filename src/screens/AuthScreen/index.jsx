import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../colors";
import { styles } from "./styles";
import { useContext, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Spinner } from "../../components/Spinner";
import { AuthContext } from "../../contexts/AuthContext";

export default function AuthScreen() {
    const { loading } = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)
    const handleChangeScreen = () => setIsLogin(!isLogin)


    return (
        <View style={styles.container}>
            {loading && <Spinner />}

            <Text style={styles.title}>Dev<Text style={{ color: COLORS.red }}>Post</Text></Text>

            {isLogin ? <SignIn /> : <SignUp />}

            <TouchableOpacity
                style={styles.link}
                onPress={handleChangeScreen}
                activeOpacity={0.8}
            >
                {isLogin ? (
                    <Text style={styles.linkText}>
                        Não possui conta? <Text style={{ color: COLORS.red, fontWeight: '600' }}>Cadastre-se</Text></Text>
                ) : (
                    <Text style={styles.linkText}>
                        Já possui conta? <Text style={{ color: COLORS.red, fontWeight: '600' }}>Faça login</Text></Text>
                )}
            </TouchableOpacity>
        </View>
    )
}