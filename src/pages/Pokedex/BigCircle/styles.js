import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    bigCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: '#DCDCDC',
        borderWidth: 3,
        borderColor: '#000',
        marginLeft: '10%'
    },
    mediumCircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#3298CB',
        borderWidth: 3,
        borderColor: '#000'
    },
    smallCircle: {
        marginLeft: '15%',
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: '#85BDFE',
        borderWidth: 2,
        borderColor: '#000'
    }
})

export default styles
