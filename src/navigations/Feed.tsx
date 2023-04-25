import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Weekly from "../screens/main/Weekly";
import SeparateTasks from "../screens/main/SeparateTasks";
import Statistics from "../screens/main/Statistics";

const Tab = createBottomTabNavigator();

const FeedNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Weekly"
                component={Weekly}
            />
            <Tab.Screen
                name="SeparateTasks"
                component={SeparateTasks}
            />
            <Tab.Screen
                name="Statistics"
                component={Statistics}
            />

        </Tab.Navigator>
    );
}
 
export default FeedNavigation;