
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";
import PostUserScreen from "../screens/PostUserScreen";

export default function AppRoutes() {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
            <Tab.Screen name="NewPostScreen" component={NewPostScreen}/>
            <Tab.Screen name="SearchScreen" component={SearchScreen}/>
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}/>
            <Tab.Screen name="PostUserScreen" component={PostUserScreen}/>
        </Tab.Navigator>
    )
}