import React from 'react'
import { View, Text, TextInput} from 'react-native'
import DestinationSearch from '../DestionationSearch'

const HomeScreen = () => {
    return (
        <View style={{width : '100%', height : '100%'}}>
            <DestinationSearch />
        </View>
    )
}

export default HomeScreen
