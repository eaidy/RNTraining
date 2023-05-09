import { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    Dimensions,
    StyleSheet,
    Button,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native'
import { signUpRequest } from '../../services/Auth'
import { CommonActions } from '@react-navigation/native';
import { trigger } from "react-native-haptic-feedback";

const screenDimensions = Dimensions.get('screen');

const SignUp = ({ navigation }: any) => {

    const [signUpInfo, setSignUpInfo] = useState({
        firstname: '',
        lastname: '',
        birthday: '',
        phone: '',
        username: '',
        password: '',
    });
    const [dimensions, setDimensions] = useState(screenDimensions);
    const [responseValid, setResponseValid] = useState(false);
    
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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1}}
            keyboardVerticalOffset={-100}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss} 
                accessible={false}
            >
                <ScrollView
                    contentContainerStyle={styles.screenContainer}
                >
                    <View
                        style={{
                            width: '75%',
                            marginBottom: 20
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
                            Sign-Up to RNTraining App
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
                                height: 45,
                                alignSelf: 'center',
                                marginBottom: 20
                            }]}
                            maxLength={12}
                            keyboardAppearance="light"
                            placeholder="Username"
                            placeholderTextColor="#bbb"
                            autoCapitalize='none'
                            value={signUpInfo.username}
                            onChangeText={(current) => setSignUpInfo((previous) => {
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
                                height: 45,
                                alignSelf: 'center',
                                marginBottom: 30
                            }]}
                            placeholder="Password"
                            placeholderTextColor="#bbb"
                            keyboardAppearance="light"
                            autoCapitalize='none'
                            secureTextEntry={true}
                            value={signUpInfo.password}
                            onChangeText={(current) => setSignUpInfo((previous) => {
                                return {
                                    ...previous,
                                    password: current
                                }    
                            })}
                            
                        />
                        <TextInput 
                            style={[{
                                borderWidth: 1,
                                borderColor: 'gray',
                                fontFamily: 'helveticaneue',
                                fontWeight: '300',
                                borderRadius: 5,
                                padding: 10,
                                width: dimensions.width / dimensions.height < 1 ? '75%' : '50%',
                                height: 45,
                                alignSelf: 'center',
                                marginBottom: 20
                            }]}
                            maxLength={12}
                            keyboardAppearance="light"
                            placeholder="Firstname"
                            placeholderTextColor="#bbb"
                            autoCapitalize='none'
                            value={signUpInfo.firstname}
                            onChangeText={(current) => setSignUpInfo((previous) => {
                                return {
                                    ...previous,
                                    firstname: current
                                }    
                            })}
                        />
                        <TextInput 
                            style={[{
                                borderWidth: 1,
                                borderColor: 'gray',
                                fontFamily: 'helveticaneue',
                                fontWeight: '300',
                                borderRadius: 5,
                                padding: 10,
                                width: dimensions.width / dimensions.height < 1 ? '75%' : '50%',
                                height: 45,
                                alignSelf: 'center',
                                marginBottom: 20
                            }]}
                            maxLength={12}
                            keyboardAppearance="light"
                            placeholder="Lastname"
                            placeholderTextColor="#bbb"
                            autoCapitalize='none'
                            value={signUpInfo.lastname}
                            onChangeText={(current) => setSignUpInfo((previous) => {
                                return {
                                    ...previous,
                                    lastname: current
                                }    
                            })}
                        />
                        <TextInput 
                            style={[{
                                borderWidth: 1,
                                borderColor: 'gray',
                                fontFamily: 'helveticaneue',
                                fontWeight: '300',
                                borderRadius: 5,
                                padding: 10,
                                width: dimensions.width / dimensions.height < 1 ? '75%' : '50%',
                                height: 45,
                                alignSelf: 'center',
                                marginBottom: 20
                            }]}
                            maxLength={12}
                            keyboardAppearance="light"
                            placeholder="Birthday"
                            placeholderTextColor="#bbb"
                            autoCapitalize='none'
                            value={signUpInfo.birthday}
                            onChangeText={(current) => setSignUpInfo((previous) => {
                                return {
                                    ...previous,
                                    birthday: current
                                }    
                            })}
                        />
                        <TextInput 
                            style={[{
                                borderWidth: 1,
                                borderColor: 'gray',
                                fontFamily: 'helveticaneue',
                                fontWeight: '300',
                                borderRadius: 5,
                                padding: 10,
                                width: dimensions.width / dimensions.height < 1 ? '75%' : '50%',
                                height: 45,
                                alignSelf: 'center',
                                marginBottom: 20
                            }]}
                            maxLength={12}
                            keyboardAppearance="light"
                            placeholder="Phone"
                            placeholderTextColor="#bbb"
                            autoCapitalize='none'
                            value={signUpInfo.phone}
                            onChangeText={(current) => setSignUpInfo((previous) => {
                                return {
                                    ...previous,
                                    phone: current
                                }    
                            })}
                        />
                        <View style={styles.validationFeedback}>
                            {
                                responseValid &&
                                (
                                    <Text style={styles.validationFeedbackText}>
                                        Informations are not valid!
                                    </Text>
                                )
                            }
                        </View>
                        <View>
                            <Button 
                                title="Complete Signing Up!"
                                onPress={ async () => {
                                    const response: any = await signUpRequest(signUpInfo);

                                    if(response){
                                        trigger('notificationSuccess', {
                                            enableVibrateFallback: true,
                                            ignoreAndroidSystemSettings: false,
                                        })
                                        navigation.dispatch(CommonActions.reset({
                                            index: 0,
                                            routes: [{ name: 'Main', params: signUpInfo }]
                                        }));
                                    } else {
                                        trigger('notificationError', {
                                            enableVibrateFallback: true,
                                            ignoreAndroidSystemSettings: false,
                                        })
                                        setResponseValid(true);
                                        setTimeout(() => setResponseValid(false), 2000);
                                    }
                                }}
                            />
                            <View
                                style={styles.buttonsContainer}
                            >
                                <Button
                                    title="Login"
                                    onPress={() => navigation.navigate('Login')}
                                    color='#777'
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
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
    },
    validationFeedback: {
        marginVertical: 5,
        height: 18,
    },
    validationFeedbackText: {
        fontSize: 14,
        fontFamily: 'helveticaneue',
        fontWeight: '300',
        color: '#f52',
        textAlign: 'center'
    }
})
 
export default SignUp;