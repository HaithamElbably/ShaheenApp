import React from "react";
import { View, Text } from "react-native";

const Signup = ({navigation}: {navigation: any}) => {

    //Form
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [termsChecked, setTermsChecked] =React.useState(false)

    return(
        <View>
            <Text>
                sign up
            </Text>
        </View>
    )
}

export default Signup;