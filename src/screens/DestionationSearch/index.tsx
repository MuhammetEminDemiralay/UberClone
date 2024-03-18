import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { styles } from './styles';

const DestinationSearch = () => {

    const key = 'AIzaSyD8eXI11ghjRpeM4T9xp7k3dGfF8dZ2NEE';
    const [text, setText] = useState('');
    const [destinationText, setDestinationText] = useState('');

    const [originPlace, setOriginPlace] = useState({});
    const [destinationPlace, setDestinationPlace] = useState({});

    useEffect(() => {
        console.log(originPlace);
        console.log(destinationPlace);
        
        
    }, [originPlace, destinationPlace])

    return (
        <View style={{ height: 400, width: '100%', marginTop: 150, backgroundColor: 'skyblue' }}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details) => {
                    setOriginPlace({ data, details })
                }}
                fetchDetails={true}
                query={{
                    key: key,
                    language: 'tr',
                }}
                onFail={(error) => console.log(error)
                }
            />
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details) => {
                    setDestinationPlace({ data, details })
                }}
                fetchDetails={true}
                query={{
                    key: key,
                    language: 'tr',
                }}
                onFail={(error) => console.log(error)
                }
            />
        </View>
    )
}

export default DestinationSearch
