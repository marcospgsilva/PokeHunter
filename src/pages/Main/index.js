import React, { useState, useEffect } from 'react';
import {
    View,
    StatusBar,
    Animated,
    PanResponder,
    ImageBackground,
    SafeAreaView,
    Platform
} from 'react-native';
import { Easing } from 'react-native-reanimated';

import api from '../../services/api'

import styles from './styles'

import Background from '../../assets/background.jpg'

import Header from './Header'
import Body from './Body'
import PokedexButton from './PokedexButton'

const arr = []
const number = 1
let flag = false

export default function App({ navigation }) {

    let textPosition = { x: 0, y: 0 }
    let regionX1, regionX2, regionY1, regionY2

    const [circle, setCircle] = useState({ x1: regionX1, x2: regionX2, y1: regionY1, y2: regionY2 })
    const [value, setValue] = useState(null)
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [isLoadingPokeball, setIsLoadingPokeball] = useState(true)
    const [isLoadingPoke, setIsLoadingPoke] = useState(false)
    const [diamond, setDiamond] = useState(0)
    const [key, setKey] = useState(0)

    useEffect(() => {
        sortRegion()
    }, [])

    // Declara uma nova instância do objeto Animated
    spinValue = new Animated.Value(0)

    // Função que define as propriedades da animação
    Animated.timing(
        spinValue,
        {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true
        }
    ).start()
    // Interpolate define o início e o fim da animação
    const spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    // Declara uma nova instância do objeto Animated com valores X e Y, para animações em 2D e 3D
    const position = new Animated.ValueXY()
    // Função que retorna a posição mais recente ( GestureHandler )
    position.addListener(latestPosition => {
        textPosition = latestPosition
    })

    // Constante que recebe as respostas das funções declaradas no PanResponder
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        // Retorna o estado atual a cada movimento
        onPanResponderMove: (e, gestureState) => {
            const newPosition = { x: gestureState.dx, y: gestureState.dy }
            position.setValue(newPosition)
            // Verifica se a posição atual do usuário está dentro do círculo definido aleatoriamente.
            if ((Math.floor(newPosition.x) >= circle.x1 && Math.floor(newPosition.x) <= circle.x2)
                && (Math.floor(newPosition.y) >= circle.y1 && Math.floor(newPosition.y) <= circle.y2)) {
                setIsLoadingPokeball(false)
                handlePoke()
            }
        },
        // Define a ultima posição do gesto, como a posição inicial
        onPanResponderGrant: () => {
            position.setOffset({ x: textPosition.x, y: textPosition.y })
            position.setValue({ x: 0, y: 0 })
        },
        onPanResponderEnd: () => {
            position.flattenOffset()
        }
    })
    // Sorteia um círculo de diâmetro 50px 
    const sortRegion = () => {

        regionX1 = Math.floor(Math.random() * -200) + ((Math.random() * 9) % 2 == 0 ? - Math.random() * 200 : Math.random() * 200)
        regionX2 = regionX1 + 50
        regionY1 = Math.floor(Math.random() * -200) + ((Math.random() * 9) % 2 == 0 ? - Math.random() * 200 : Math.random() * 200)
        regionY2 = regionY1 + 50

        setCircle({ x1: regionX1, x2: regionX2, y1: regionY1, y2: regionY2 })
    }
    // Sorteia um número que será equivalente a um pokemon
    const sortPoke = () => {
        const sort = Math.floor(Math.random() * 807) + 1
        return sort
    }
    // Seta os dados do pokemon sorteado
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
        setIsLoadingPoke(true)
    }


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <StatusBar barStyle={Platform.OS === "ios" ? 'light-content' : 'light-content'} />
                <ImageBackground
                    source={Background}
                    style={styles.imageBackground}
                >
                    <Header diamond={diamond} />

                    <Body
                        panResponder={panResponder}
                        position={position}
                        spin={spin}
                        img={img}
                        name={name}
                        isLoadingPoke={isLoadingPoke}
                        isLoadingPokeball={isLoadingPokeball}
                        value={value}
                        sortRegion={sortRegion}
                        setIsLoadingPoke={setIsLoadingPoke}
                        setIsLoadingPokeball={setIsLoadingPokeball}
                    />
                    <PokedexButton navigation={navigation} arr={arr} />
                </ImageBackground>
            </View>
        </SafeAreaView >
    )
}
