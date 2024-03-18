import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 20,
    },
    image: {
        width : 70,
        height : 80,
        resizeMode : 'contain'
    },
    middleContainer: {
        flex : 1,
        marginHorizontal : 10,
        justifyContent : 'space-between',
        marginBottom : 5
    },
    endContainer: {
    width :100,
    justifyContent : 'flex-end',
    flexDirection : 'row'
    },
    type: {
        fontWeight : 'bold',
        fontSize : 18
    },
    time: {
        color : '#5d5d5d'
    },
    price: {
        fontWeight : 'bold',
        marginLeft : 10,
        fontSize : 18
    }
})