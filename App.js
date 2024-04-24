import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";
import AuthProvider from "./src/contexts/AuthContext";


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#36393f" style="light" translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
