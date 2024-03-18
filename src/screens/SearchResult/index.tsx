import React from 'react'
import { View, Text } from 'react-native'
import HomeMap from '../../component/HomeMap'
import UberTypes from '../../component/UberTypes'
import { styles } from './styles'
import RouteMap from '../../component/RouteMap'

const SearchResult = () => {
    return (
        <View style={styles.container}>
            {/* <HomeMap /> */}
            <RouteMap />
            <UberTypes />
        </View>
    )
}

export default SearchResult
