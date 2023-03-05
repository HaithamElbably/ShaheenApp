import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { images } from "../../constants";

const Splash = ({navigation}: {navigation: any}) => {
    return(
        <View 
            style ={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'

            }}
        >
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Image
                    source={images.logo}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Splash;