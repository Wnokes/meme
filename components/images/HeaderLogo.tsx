import React from "react";
import {Image} from "react-native";

const imgPath = require("../../assets/meme-logo.jpeg");

export default () => {
    return <Image source={imgPath} style={{height: 50, width: 250}} />
};
