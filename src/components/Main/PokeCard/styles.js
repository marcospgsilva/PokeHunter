import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    cardMatch: {
        alignSelf: 'center',
        alignItems: 'center',
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        padding: 20,
        borderRadius: 25,
        height: '60%',
        width: '60%',
        backgroundColor: '#FFF',
        elevation: 5
    },
    pokeImage: {
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        height: '75%',
        width: '75%'
    },
    titleName: {
        marginTop: 10,
        fontSize: 25,
        color: '#555',
        fontWeight: 'bold'
    },
    imageDiamond: {
        width: 20,
        height: 20
    },
    value: {
        marginLeft: 3,
        fontSize: 20,
        fontWeight: '800',
        color: '#555'
    }
})

export default styles
