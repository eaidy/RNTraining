import { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    Dimensions,
    StyleSheet,
    Button,
    Text,
    TouchableWithoutFeedback,
    Keyboard
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
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss} 
            accessible={false}
        >
            <View
                style={styles.screenContainer}
            >
                <View
                    style={{
                        width: '75%',
                        marginBottom: 35
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'helveticaneue',
                            fontSize: 27,
                            textAlign: 'center',
                            fontWeight: '300',
                            color: '#444'

                        }}
                    >
                        React-Native Training Ground
                    </Text>
                </View>
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
                        maxLength={12}
                        keyboardAppearance="light"
                        placeholder="Username"
                        placeholderTextColor="#bbb"
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
                        placeholderTextColor="#bbb"
                        keyboardAppearance="light"
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
                                    trigger('notificationSuccess', {
                                        enableVibrateFallback: true,
                                        ignoreAndroidSystemSettings: false,
                                    })
                                    navigation.dispatch(CommonActions.reset({
                                        index: 0,
                                        routes: [{ name: 'Main', params: userInfo }]
                                    }));
                                } else {
                                    trigger('notificationError', {
                                        enableVibrateFallback: true,
                                        ignoreAndroidSystemSettings: false,
                                    })
                                }
                            }}
                        />
                        <View
                            style={styles.buttonsContainer}
                        >
                            <Button
                                title="Sign-Up"
                                onPress={() => navigation.navigate('SignUp')}
                                color='#777'
                            />
                            <Button
                                title="Forget Password ?"
                                onPress={() => navigation.navigate('ForgetPassword')}
                                color='#777'
                            />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        height: '60%',
        width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'blue'
    }
})
 
export default Login;