import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles'
import UberTypeRow from '../UberTypeRow'
import typesData from '../../assets/data/types'

const UberTypes = () => {

    const confirm = () => {

    }

    return (
        <View>
            {
                typesData.map((type, index) => (
                    <UberTypeRow type={type} key={index} />
                ))
            }
            <Pressable onPress={confirm} style={styles.confirmBtn}>
                <Text style={styles.text}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    )
}

export default UberTypes
