import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function ProfileScreen() {
    const {logout} = useContext(AuthContext)

    const handleLogout = async () => {
        await logout()
    }

    return (
        <View>
            <Text>Tela de profile</Text>
            <Button title="Sair" onPress={handleLogout}/>
        </View>
    )
}