import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 25,
        height: '30%',
        width: '30%'
    },
    pokeball: {
        zIndex: 1,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        height: '90%',
        width: '90%'
    },
})

export default styles