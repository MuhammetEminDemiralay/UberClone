import React from 'react'
import { View, Text } from 'react-native'
import HomeMap from '../../component/HomeMap'
import UberTypes from '../../component/UberTypes'
import { styles } from './styles'

const SearchResult = () => {
    return (
        <View style={styles.container}>
            <HomeMap />
            <UberTypes />
        </View>
    )
}

export default SearchResult
