import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#222'
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 12,
        backgroundColor: '#222',
        justifyContent: 'center'
    },
    card: {
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 25,
        height: '30%',
        width: '30%'
    },
    defaultTitle: {
        alignSelf: 'center',
        color: '#222',
        fontSize: 20
    }
})

export default styles