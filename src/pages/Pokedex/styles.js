import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    safeArea: {
        flex: 10,
        backgroundColor: '#FE0055'
    },
    container: {
        flex: 10,
        paddingTop: Constants.statusBarHeight
    }
})

export default styles
