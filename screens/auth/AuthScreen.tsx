import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput } from "react-native";
import { dark } from "../../styles/colors";
import textInputStyles from "../../styles/forms/testInputStyles"
const {textFieldWrapper, textField} = textInputStyles;
import authScreenStyles from "../../styles/stacks/auth/authScreenStyles";
import axios from "axios";
const apiEndpoint = "https://reactnstuff.devcamp.space/memipedia/memipedia_user_token";

export default () => {
    const [formToShow, setFormToShow] = useState("LOGIN");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const screenTypeText = () => {
        if (formToShow == "LOGIN") {
            return "Need an account? Register";
        } else if (formToShow == "REGISTER") {
            return "Already have an account? Login";
        }
    }

    const handleAuthTypePress = () => {
        if (formToShow == "LOGIN") {
            setFormToShow("REGISTER");
        } else if (formToShow == "REGISTER") {
            setFormToShow("LOGIN");
        }
    }

    const headerText = () => {
        if (formToShow == "LOGIN") {
            return "Login";
        } else if (formToShow == "REGISTER") {
            return "Register";
        }
    }

    const handleSubmit = () => {
        const params = {
            auth: {
                email: email,
                password: password
            }
        }
        axios.post(apiEndpoint, params)
        .then(response => {
            console.log("Response from handle submit", response.data);
        })
        .catch(error => {
            console.log("error getting tolken", error);
        });
    };
    return (
        <View style={authScreenStyles.container}>
            <Text style={{color: "white"}}>
                {headerText()}
            </Text>

            <View style={textFieldWrapper}>
                <TextInput 
                    placeholder="Email:" 
                    value={email} 
                    onChangeText={x => setEmail(x)}
                    style={textField}
                    autoCapitalize="none"
                    spellCheck={false}
                />
            </View>
            <View style={textFieldWrapper}>
                <TextInput 
                    placeholder="Password:" 
                    value={password} 
                    onChangeText={x => setPassword(x)}
                    style={textField}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity onPress={handleAuthTypePress}>
                <Text style={{color: "white"}}>{screenTypeText()}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleSubmit}>
                <Text style={{color: "white"}}>{headerText()}</Text>
            </TouchableOpacity>
        </View>
    )
}