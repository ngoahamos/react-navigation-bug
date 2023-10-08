import React, { useLayoutEffect } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'

const HelloScreen = ({ navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerSearchBarOptions: {
                placeholder: "Search",
                onChangeText: (event) => console.log(event.nativeEvent.text),
            },
        })
    }, [navigation]);

    return (<View>
        <Text>Hello, World!</Text>
    </View>)
}

export default HelloScreen;