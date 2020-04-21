import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        zIndex: 2,
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        width: '95%',
        borderLeftWidth: 3,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderColor: '#ffaa00',
        borderRadius: 50,
        backgroundColor: '#333',
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5
    },
    avatarBox: {
        marginRight: 5,
        marginLeft: '2%'
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 40

    },
    boxBarPerson: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boxStar: {
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    star: {
        width: 20,
        height: 20
    },
    level: {
        marginLeft: 10,
        fontSize: 17,
        color: '#ffaa00',
        fontWeight: '700'
    },
    boxDiamond: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    diamond: {
        width: 20,
        height: 20
    },
    diamondNumber: {
        marginLeft: 10,
        fontWeight: '900',
        fontSize: 17,
        color: '#fff'
    },
})

export default styles
