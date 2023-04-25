import { createDrawerNavigator } from "@react-navigation/drawer";
import FeedNavigation from "./Feed";
import Settings from "../screens/main/Settings";

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Feed"
                component={FeedNavigation}
            />
            <Drawer.Screen
                name="Settings"
                component={Settings}
            />
        </Drawer.Navigator>
    );
}
 
export default MainNavigation;