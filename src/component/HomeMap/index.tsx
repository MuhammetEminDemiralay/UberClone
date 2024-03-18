import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { styles } from './styles'
import MapView, { Marker } from 'react-native-maps'
import mapStyle from './mapStyle.json'
import cars from '../../assets/data/cars'


const HomeMap = (props: any) => {


    const getImage = (type: any) => {
        if (type.type === 'UberX') {
            return require('../../assets/images/top-UberX.png')
        }
        if (type.type === 'Comfort') {
            return require('../../assets/images/top-Comfort.png')
        }
        
        return require('../../assets/images/top-UberXL.png')
    }


    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 28.450627,
                    longitude: -16.263045,
                    latitudeDelta: 0.7,
                    longitudeDelta: 0.7
                }}
            >
                {
                    cars.map(car => (
                        <Marker
                            key={car.id}
                            coordinate={{ latitude: car.latitude, longitude: car.longitude }}
                        >
                            <Image
                                source={getImage(car.type)}
                                style={{ width: 70, height: 70, resizeMode: 'contain' }}
                            />
                        </Marker>
                    ))
                }
            </MapView>
        </View>
    )
}

export default HomeMap
