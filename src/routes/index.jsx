import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

export default function Routes() {
    const signed = false
    const loading = false

    return signed ? <AppRoutes /> : <AuthRoutes />

    
}