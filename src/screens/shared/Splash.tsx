import React from "react";
import { View } from "react-native";
import Lottie from "lottie-react-native";

const Splash = (): JSX.Element => {

    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 0}}>
            <Lottie 
                source={require("../../assets/lotties/chameleon.json")}
                autoPlay
                loop={true}
                resizeMode="contain"
            />
        </View>
    );
}
 
export default Splash;