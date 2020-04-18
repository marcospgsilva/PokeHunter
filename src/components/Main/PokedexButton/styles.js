import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: '7%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonPokedex: {
        width: 90,
        height: 90,
        elevation: 7,
        marginBottom: 20,
        backgroundColor: '#ffaa00',
        borderRadius: 50,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 7
    },
    pokedexImg: {
        width: 90,
        height: 90
    }
})

export default styles