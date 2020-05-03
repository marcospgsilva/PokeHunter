import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#333',
    },
    header: {
        marginTop: '5%',
        justifyContent:'center',
        alignItems:'center'
    },
    logoIcon: {
        marginTop: '10%',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    welcomeMessage: {
        fontSize: 30,
        color: '#ffaa00',
        fontWeight: 'bold',
        marginBottom: -10,
    },
    logoBox: {
        justifyContent:'center',
        alignItems:'center',
    },
    pokeLogoName: {
        fontSize: 66,
        color: '#FFF',
        fontWeight:'bold'
    },
    hunterLogoName: {
        color: '#ffaa00',
        fontWeight: 'bold'
    },
    subtitleContainer: {
        justifyContent:'center',
        alignItems:'center'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    nickname: {
        marginTop: '4%',
        fontSize: 16,
        alignSelf: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    },
    inputBox: {
        width: '80%',
        textAlign:'center',
        justifyContent:'center',
        alignSelf: 'center',
        alignItems:'center',
        borderColor: '#ffaa00',
        backgroundColor:'#333',
        borderWidth: 1,
        marginTop: '3%',
        color: '#FFF',
        fontSize: 18,
        padding: 10,
        borderRadius: 15
    },
    buttonContainer: {
        marginTop: '5%',
    },
    button: {
        width: 200, 
        height: 50,
        borderRadius: 15,
        justifyContent:'center',
        alignSelf:"center", 
        alignItems:"center",
        backgroundColor:'#ffaa00'
        },
    buttonText: {
        color:'#333',
        fontWeight:'bold', 
        fontSize: 20, 
        padding: 10
        }
})

export default styles