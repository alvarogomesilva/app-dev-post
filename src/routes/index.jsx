import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

export default function Routes() {
    const { signed } = useContext(AuthContext)
    const loading = false

    return signed ? <AppRoutes /> : <AuthRoutes />

    
}