import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
import { ActivityIndicator, View } from "react-native"
import { COLORS } from "../colors"

export default function Routes() {
    const { signed, loadingAuth } = useContext(AuthContext)
    
    if (loadingAuth) {
        return (
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.black
                }}
            >
                <ActivityIndicator size="large" color={COLORS.red}/>
            </View>
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />

    
}