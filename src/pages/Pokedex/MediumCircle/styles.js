import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    circle1x: {
        marginTop: '10%',
        marginLeft: '15%',
        width: 5,
        height: 5,
        borderRadius: 5,
    },
    circle2x: {
        width: 25,
        height: 25,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#000'
    }
})

export default styles
