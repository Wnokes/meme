import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

interface IFeedScreenProps {
    navigation: {
        navigate: (arg: string) => void;
    }
}

export default (props: IFeedScreenProps) => {
  return (
  <View>
    <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
        <Text>
            Search
        </Text>
    </TouchableOpacity>
  </View>
  );
};