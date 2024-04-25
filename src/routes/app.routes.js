import { COLORS } from '../colors'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";
import PostUserScreen from "../screens/PostUserScreen";


import { Feather } from '@expo/vector-icons';


function StackRoutes() {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='NewPostScreen'
                component={NewPostScreen}
                options={{
                    title: 'Novo post',
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: '#36393f'
                    }
                }}
            />
            <Stack.Screen
                name='PostUserScreen'
                component={PostUserScreen}
                options={{
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: '#36393f'
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default function AppRoutes() {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: COLORS.white,

            tabBarStyle: {
                backgroundColor: '#202225',
                borderTopWidth: 0,

            }
        }} >
            <Tab.Screen
                name="HomeTab"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" size={size} color={color} />
                    }
                }} />

            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="search" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="user" size={size} color={color} />
                    }
                }}
            />

        </Tab.Navigator>
    )
}