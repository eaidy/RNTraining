import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Weekly from "../screens/main/Weekly";
import SeparateTasks from "../screens/main/SeparateTasks";
import Statistics from "../screens/main/Statistics";
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const FeedNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        paddingVertical: 10,
                    },
                    tabBarIcon: ({ focused, color, size }) =>{
                        let iconName;

                        if (route.name === 'Weekly') {
                            iconName = focused
                              ? 'ios-calendar'
                              : 'ios-calendar-outline';
                        } else if (route.name === 'SeparateTasks') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        } else if (route.name === 'Statistics') {
                            iconName = focused ? 'ios-analytics-sharp' : 'ios-analytics-outline';
                        }
              
                          // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#6DA9E4',
                    tabBarInactiveTintColor: 'gray',
                })
            }
        >
            <Tab.Screen
                name="Weekly"
                component={Weekly}
                options={{
                    // tabBarBadge: 1
                }}
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