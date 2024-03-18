import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';

const UberTypeRow = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/UberX.jpeg')} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    UberX
                    <Ionicons name="person" size={17} color="black" />
                    3
                </Text>
                <Text style={styles.time}>
                    7.05PM drop of
                </Text>
            </View>
            <View style={styles.endContainer}>
                <Ionicons name="pricetag" size={24} color="lime" />
                <Text style={styles.price}>
                    east. $22
                </Text>
            </View>
        </View>
    )
}

export default UberTypeRow
