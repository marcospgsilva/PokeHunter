import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginTop: '3%',
        alignSelf: 'center',
        width: '80%',
        height: '50%',

    },
    modalPokedexContainer: {
        flex:1, 
        marginTop: '5%'
    },
    modalSubContainer: { 
        backgroundColor: '#333',
        borderRadius:20,
        alignSelf:'center',
        width: '95%'
    },
    modalTitle: {
        color:'white',
        textAlign:'center', 
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 20
    },
    modalButtonContainer: {
        marginTop: 15,
        width: '100%'
    },
    modalButton: {
        width: '100%',
        backgroundColor: '#ffaa00', 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    modalButtonTitle: {
        alignSelf: 'center', 
        fontSize: 22, 
        paddingVertical: 8, 
        fontWeight:'bold'
        } 

})

export default styles