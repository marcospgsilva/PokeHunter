import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    Animated,
    PanResponder,
    ImageBackground,
    SafeAreaView,
    Platform
} from 'react-native';
import { Easing } from 'react-native-reanimated';

import api from '../../services/api'

import Background from '../../../assets/background.jpg'
import Pokeball from '../../../assets/pokeball.png'
import Star from '../../../assets/star.png'
import Pokedex from '../../../assets/pokedex.png'
import Diamond from '../../../assets/diamond.png'
import Avatar from '../../../assets/fotomp.jpg'

const arr = []
const number = 1
let flag = false

export default function App({ navigation }) {

    let textPosition = { x: 0, y: 0 }
    let regionX1, regionX2, regionY1, regionY2

    function sortRegion() {
        regionX1 = Math.floor(Math.random() * -200) + ((Math.random() * 9) % 2 == 0 ? - Math.random() * 200 : Math.random() * 200)
        regionX2 = regionX1 + 50
        regionY1 = Math.floor(Math.random() * -200) + ((Math.random() * 9) % 2 == 0 ? - Math.random() * 200 : Math.random() * 200)
        regionY2 = regionY1 + 50

        setHunt({ x1: regionX1, x2: regionX2, y1: regionY1, y2: regionY2 })
    }

    useEffect(() => {
        sortRegion()
    }, [])

    const [hunt, setHunt] = useState({ x1: regionX1, x2: regionX2, y1: regionY1, y2: regionY2 })
    const [value, setValue] = useState(null)
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [isLoadingPokeball, setIsLoadingPokeball] = useState(true)
    const [isLoadingPoke, setIsLoadingPoke] = useState(false)
    const [diamond, setDiamond] = useState(0)
    const [key, setKey] = useState(0)

    spinValue = new Animated.Value(0)

    Animated.timing(
        spinValue,
        {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true
        }
    ).start()

    const spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const position = new Animated.ValueXY()
    position.addListener(latestPosition => {
        textPosition = latestPosition
    })

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            const newPosition = { x: gestureState.dx, y: gestureState.dy }
            position.setValue(newPosition)
            if ((Math.floor(newPosition.x) >= hunt.x1 && Math.floor(newPosition.x) <= hunt.x2)
                && (Math.floor(newPosition.y) >= hunt.y1 && Math.floor(newPosition.y) <= hunt.y2)) {
                setIsLoadingPokeball(false)
                handlePoke()
            }
        },
        onPanResponderGrant: () => {
            position.setOffset({ x: textPosition.x, y: textPosition.y })
            position.setValue({ x: 0, y: 0 })
        },
        onPanResponderEnd: () => {
            position.flattenOffset()
        }
    })

    const sortPoke = () => {
        const sort = Math.floor(Math.random() * 807) + 1
        return sort
    }

    const handlePoke = async () => {

        let id = sortPoke()

        while (id === 641 || id === 648 || id === 745 || id === 412 || id === 718 || id === 413 || id === 421) {

            id = sortPoke()

        }

        const response = await api.get(`pokemon/${id}`)

        let name = response.data.name

        let img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

        setValue(id)
        setImg(img)
        setName(name)
        setDiamond(diamond + id)
        setKey(key + 1)
        arr.map(item => {
            if (item.id == id) {
                flag = true
                item.number = item.number + 1
            }
        })

        if (!flag) {
            arr.push({ img, key, id, number })
        }
        setIsLoadingPoke(true)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#222' }}>
            <View style={styles.container}>
                <StatusBar barStyle={Platform.OS === "ios" ? 'light-content' : 'light-content'} />
                <ImageBackground
                    source={Background}
                    style={{ width: '100%', height: '100%' }}
                >
                    <View style={styles.header}>
                        <View style={{ marginRight: 5, marginLeft: '2%' }}>
                            <Image
                                source={Avatar}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 40
                                }} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                <Image source={Star} style={{ width: 20, height: 20 }} />
                                <Text style={styles.level}>Lv. 1</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                                <Image source={Diamond} style={{ width: 20, height: 20 }} />
                                <Text style={styles.diamondNumber}>{diamond}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.body}>
                        {isLoadingPokeball
                            ? <Animated.View
                                {...panResponder.panHandlers}
                                style={[styles.card, position.getLayout()]}>
                                <Image source={Pokeball} style={styles.pokeball} resizeMode="contain" />
                            </Animated.View>
                            : <></>
                        }
                        {isLoadingPoke &&
                            <Animated.View
                                style={[styles.cardMatch, { transform: [{ rotateY: spin }] }]}>
                                <Image source={{ uri: `${img}` }} style={styles.pokeImage} resizeMode="contain" />
                                <Text style={styles.titleName}>{name}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={Diamond} resizeMode="contain" style={{ width: 20, height: 20 }} />
                                    <Text style={{ marginLeft: 3, fontSize: 20, fontWeight: '800', color: '#555' }}>{value}</Text>
                                </View>
                            </Animated.View>
                        }
                        {isLoadingPoke
                            && <View style={styles.buttonBox}>
                                <TouchableOpacity onPress={() => {
                                    sortRegion()
                                    setIsLoadingPoke(false)
                                    setIsLoadingPokeball(true)
                                }} hitSlop={{ top: 30, left: 150, bottom: 30, right: 150 }} >
                                    <Text style={styles.buttonTitle}>Caçar Pokemon!</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>

                    <View
                        style={{
                            flex: 1,
                            marginBottom: '7%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 90,
                                height: 90,
                                elevation: 7,
                                marginBottom: 20,
                                backgroundColor: '#ffaa00',
                                borderRadius: 50,
                                shadowColor: 'rgb(0,0,0)',
                                shadowOffset: { width: 2, height: 2 },
                                shadowOpacity: 0.6,
                                shadowRadius: 7
                            }}
                            title="Pokedex"
                            onPress={() => {
                                navigation.navigate('Pokedex', { arr: arr })
                            }}>
                            <Image
                                source={Pokedex}
                                style={{
                                    width: 90,
                                    height: 90
                                }}
                                resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        backgroundColor: '#222',
        justifyContent: 'center'

    },
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
    body: {
        flex: 10,
        marginTop: -20,
        justifyContent: 'center',
    },
    level: {
        marginLeft: 10,
        fontSize: 17,
        color: '#ffaa00',
        fontWeight: '700'
    },
    diamondNumber: {
        marginLeft: 10,
        fontWeight: '900',
        fontSize: 17,
        color: '#fff'
    },
    card: {
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 25,
        height: '30%',
        width: '30%'
    },
    cardMatch: {
        alignSelf: 'center',
        alignItems: 'center',
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        padding: 20,
        borderRadius: 25,
        height: '60%',
        width: '60%',
        backgroundColor: '#FFF',
        elevation: 5
    },
    pokeImage: {
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        height: '75%',
        width: '75%'
    },
    pokeball: {
        zIndex: 1,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        height: '90%',
        width: '90%'
    },
    defaultTitle: {
        alignSelf: 'center',
        color: '#222',
        fontSize: 20
    },
    buttonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        height: 60,
        width: '80%',
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#ffaa00',
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
        color: '#222',
        fontWeight: 'bold'
    },
    titleName: {
        marginTop: 10,
        fontSize: 25,
        color: '#555',
        fontWeight: 'bold'
    }
});
