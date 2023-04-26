import { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    Dimensions,
    StyleSheet,
    Button
} from 'react-native'
import { loginRequest } from '../../services/Auth'
import { CommonActions } from '@react-navigation/native';
import { trigger } from "react-native-haptic-feedback";

const screenDimensions = Dimensions.get('screen');

const Login = ({ navigation }: any) => {

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    });
    const [dimensions, setDimensions] = useState(screenDimensions);
    
    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({screen}) => {
            setDimensions(screen);
            },
        );
        return () => subscription?.remove();
    });

    return (
        <View
            style={styles.screenContainer}
        >
            <View
                style={styles.formContainer}
            >
                <TextInput 
                    style={[{
                        borderWidth: 1,
                        borderColor: 'gray',
                        fontFamily: 'helveticaneue',
                        fontWeight: '300',
                        borderRadius: 5,
                        padding: 10,
                        width: dimensions.width / dimensions.height < 1 ? '75%' : '50%',
                        height: 50,
                        alignSelf: 'center',
                        marginBottom: 20
                    }]}
                    placeholder="Username"
                    autoCapitalize='none'
                    value={userInfo.username}
                    onChangeText={(current) => setUserInfo((previous) => {
                        return {
                            ...previous,
                            username: current
                        }    
                    })}
                />
                <TextInput 
                    style={[{
                        borderWidth: 1,
                        fontFamily: 'helveticaneue',
                        borderColor: 'gray',
                        borderRadius: 5,
                        padding: 10,
                        width: dimensions.width / dimensions.height < 1 ? '75%' : '50%',
                        height: 50,
                        alignSelf: 'center',
                        marginBottom: 30
                    }]}
                    placeholder="Password"
                    autoCapitalize='none'
                    secureTextEntry={true}
                    value={userInfo.password}
                    onChangeText={(current) => setUserInfo((previous) => {
                        return {
                            ...previous,
                            password: current
                        }    
                    })}
                    
                />
                <View>
                    <Button 
                        title="Login"
                        onPress={() => {
                            if(loginRequest(userInfo)){
                                console.log("Authorization Success!");
                                trigger('rigid', {
                                    enableVibrateFallback: true,
                                    ignoreAndroidSystemSettings: false,
                                })
                                navigation.dispatch(CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'Main', params: userInfo }]
                                }));
                            } else {
                                console.log("Wrong information!");

                            }
                        }}
                    />
                    <Button
                        title="Sign-Up"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 1,
        height: '50%',
        width: '100%'
    }
})
 
export default Login;