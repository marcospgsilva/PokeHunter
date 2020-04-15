import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Constants from 'expo-constants'

import api from '../../services/api'

import Pokeball from '../../../assets/pokeball.png'
import Star from '../../../assets/star.png'
import Pokedex from '../../../assets/pokedex.png'
import Diamond from '../../../assets/diamond.png'
import Ash from '../../../assets/ash.jpeg'

const arr = []
const number = 1
let flag = false

export default function App({ navigation }) {

    const [value, setValue] = useState(null)
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [diamond, setDiamond] = useState(0)
    const [key, setKey] = useState(0)

    const sortPoke = () => {
        setIsLoading(true)
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
        console.log(arr)
        setIsLoading(false)
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.header}>
                <View style={{ marginRight: 5, marginLeft: '6%' }}>
                    <Image
                        source={Ash}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 60
                        }} />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <Image source={Star} style={{ width: 20, height: 20 }} />
                        <Text style={styles.level}>Lv. 1</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <Image source={Diamond} style={{ width: 20, height: 20 }} />
                        <Text style={styles.diamondNumber}>{diamond}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.card}>
                    {img != ''
                        ? <Image source={{ uri: `${img}` }} style={styles.pokeImage} resizeMode="contain" />
                        : <Image source={Pokeball} style={styles.pokeball} resizeMode="contain" />}
                    {name != ''
                        ?
                        <>
                            <Text style={styles.titleName}>{name}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={Diamond} resizeMode="contain" style={{ width: 20, height: 20 }} />
                                <Text style={{ marginLeft: 3, fontSize: 20, fontWeight: '800', color: '#555' }}>{value}</Text>
                            </View>
                        </>
                        : <></>
                    }
                </View>
                {isLoading === false
                    ?

                    <View style={styles.buttonBox}>
                        <TouchableOpacity onPress={() => handlePoke()} hitSlop={{ top: 30, left: 150, bottom: 30, right: 150 }} >
                            <Text style={styles.buttonTitle}>Caçar!</Text>
                        </TouchableOpacity>
                    </View>

                    : <></>
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
                        width: 80,
                        height: 80,
                        elevation: 7,
                        backgroundColor: '#222',
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
                            width: 80,
                            height: 80
                        }}
                        resizeMode="contain" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: '#777', marginTop: 10 }}>Pokedex</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        backgroundColor: '#222',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        height: '60%',
        width: '80%',
        backgroundColor: '#fff'
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
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        height: '75%',
        width: '75%'
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
        backgroundColor: '#ffaa00'
    },
    buttonTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        color: '#222',
        fontWeight: '800'
    },
    titleName: {
        marginTop: 10,
        fontSize: 35,
        color: '#555',
        fontWeight: '800'
    }
});
