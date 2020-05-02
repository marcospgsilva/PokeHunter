import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    body: {
        flex: 10,
        marginTop: -20,
        justifyContent: 'center'
    },
    modalWelcomeContainer: {
        flex:1, 
        marginTop: '30%'
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
    modalHuntContainer: {
        flex:1, 
        marginTop: '30%'
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