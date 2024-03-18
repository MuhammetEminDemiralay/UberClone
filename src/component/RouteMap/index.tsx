import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { styles } from './styles'
import MapView, { Marker } from 'react-native-maps'
import mapStyle from './mapStyle.json'
import cars from '../../assets/data/cars'
import MapViewDirections from 'react-native-maps-directions'


const RouteMap = (props: any) => {
    const key = 'AIzaSyD8eXI11ghjRpeM4T9xp7k3dGfF8dZ2NEE'

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    }

    const destination = {
        latitude: 28.460127,
        longitude: -16.269045,
    }


    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 28.450627,
                    longitude: -16.269045,
                    latitudeDelta: 0.7,
                    longitudeDelta: 0.7
                }}
            >
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey='AIzaSyBA0xzIv_PZxZfWXatHG1l2mlDMT76vbt8'
                    onError={(error) => console.log(error)
                    }
                    strokeColor='red'
                    strokeWidth={2}
                />
                <Marker
                    coordinate={origin}
                    title='origin'
                />
                <Marker
                    coordinate={destination}
                    title='destination'
                />

            </MapView>
        </View>
    )
}

export default RouteMap
