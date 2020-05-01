import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    buttonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        height: 60,
        width: '80%',
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#333',
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5
    },
    buttonTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        color: '#ffaa00',
        fontWeight: 'bold'
    }
})

export default styles