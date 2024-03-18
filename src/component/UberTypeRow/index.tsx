import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';

const UberTypeRow = (props: any) => {

    const { type } = props;

    const getImage = () => {
        if (type.type === 'UberX') {
            return require('../../assets/images/UberX.jpeg')
        }
        if (type.type === 'Comfort') {
            return require('../../assets/images/Comfort.jpeg')
        }
        return require('../../assets/images/UberXL.jpeg')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={getImage()} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}
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
                    east. ${type.price}
                </Text>
            </View>
        </View>
    )
}

export default UberTypeRow
