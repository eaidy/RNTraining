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
                options={{
                    title: 'Login',
                    headerStyle: {
                      backgroundColor: '#aaa',
                    },
                    headerTintColor: '#eee',
                    headerTitleStyle: {
                      fontFamily: 'helveticaneue',  
                      fontWeight: '500',
                      fontSize: 22
                    },
                }}
            />
            <Stack.Screen 
                name="SignUp"
                component={SignUp}
                options={{
                    title: 'Sign Up',
                    headerStyle: {
                      backgroundColor: '#aaa',
                    },
                    headerTintColor: '#eee',
                    headerTitleStyle: {
                      fontFamily: 'helveticaneue',  
                      fontWeight: '500',
                      fontSize: 22
                    },
                }}
            />
            <Stack.Screen 
                name="ForgetPassword"
                component={ForgetPassword}
                options={{
                    title: 'Reset Password',
                    headerStyle: {
                      backgroundColor: '#aaa',
                    },
                    headerTintColor: '#eee',
                    headerTitleStyle: {
                      fontFamily: 'helveticaneue',  
                      fontWeight: '500',
                      fontSize: 22
                    },
                }}
            />
        </Stack.Navigator>
    );
}
 
export default AuthNavigation;