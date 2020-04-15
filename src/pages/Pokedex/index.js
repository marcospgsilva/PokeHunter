import React from 'react'
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    Image
} from 'react-native'
import Constants from 'expo-constants'

let render = null

function Pokedex({ route, navigation }) {

    const { arr } = route.params

    return (
        <View
            style={{
                flex: 1,
                paddingTop: Constants.statusBarHeight,
                backgroundColor: '#222'
            }}>
            <View style={{ alignSelf: 'center', justifyContent: 'center', backgroundColor: '#333', borderRadius: 30, width: '80%' }}>
                <Text style={{
                    justifyContent: 'center',
                    fontSize: 50,
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                    color: '#ffaa00',
                    alignSelf: 'center',
                    elevation: 8,
                    shadowColor: 'rgb(0,0,0)',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 3,
                }}>POKEDEX</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="never"
            >
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                    {render = arr.map(item => (
                        <View
                            key={item.id}
                            style={{
                                width: Dimensions.get('window').width / 3.2,
                                height: Dimensions.get('window').height / 5,
                                backgroundColor: '#222',
                                shadowColor: 'rgb(0,0,0)',
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity: 0.4,
                                shadowRadius: 3,
                                borderWidth: 5,
                                borderColor: '#333',
                                borderRadius: 10,
                                marginTop: 10,
                                marginRight: 4,
                                marginLeft: 2,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Image
                                source={{ uri: `${item.img}` }}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode="contain" />
                            <View
                                style={{
                                    position: 'absolute',
                                    top: '80%',
                                    justifyContent: 'center',
                                    alignSelf: 'flex-end',
                                    shadowColor: 'rgb(0,0,0)',
                                    shadowOffset: { width: 1, height: 1 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 3,
                                    height: 20,
                                    width: 20,
                                    borderRadius: 20,
                                    backgroundColor: '#ffaa00'
                                }}>
                                <Text style={{ fontWeight: '900', fontSize: 20, alignSelf: 'center' }}>{item.number}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default Pokedex