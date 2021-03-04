import React from "react";
import {View, TouchableOpacity, Text} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import bottomTabStyles from "../../styles/navigation/bottomTabStyles";
import { color } from "react-native-reanimated";

interface IBottomTabBarProps {
    navigate: (arg: string) => void;

};

export default (props: IBottomTabBarProps) => {
    return <
        View style={bottomTabStyles.container}>
            <TouchableOpacity onPress={() => props.navigate("Feed")}>
                <MaterialCommunityIcons name="newspaper" color="white" size={30}/>
                <Text style={{color: "white"}}>
                    Feed
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigate("Search")}>
                <Ionicons name="md-search" color="white" size={30} />
                <Text style={{color: "white"}}>
                    Search
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigate("PostForm")}> 
                <MaterialCommunityIcons name="plus-circle" color="white" size={30}/>
                <Text style={{color: "white"}}>
                    Form
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigate("Account")}>
                <MaterialIcons name="settings" color="white" size={30}/>
                <Text style={{color: "white"}}>
                    Account
                </Text>
            </TouchableOpacity>
        </View>
}