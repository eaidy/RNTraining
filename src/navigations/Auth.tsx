import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgetPassword from "../screens/auth/ForgetPassword";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
            />
            <Stack.Screen 
                name="SignUp"
                component={SignUp}
            />
            <Stack.Screen 
                name="ForgetPassword"
                component={ForgetPassword}
            />
        </Stack.Navigator>
    );
}
 
export default AuthNavigation;