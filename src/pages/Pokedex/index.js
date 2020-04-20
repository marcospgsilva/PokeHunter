import React, { useState } from 'react'
import {
    View,
    SafeAreaView
} from 'react-native'

import styles from './styles'

import Header from '../../components/Pokedex/Header'
import Body from '../../components/Pokedex/Body'
import Footer from '../../components/Pokedex/Footer'

function Pokedex({ route, navigation }) {

    const { arr } = route.params
    const [pos, setPos] = useState(0)
    const [green, setGreen] = useState(false)
    const [red, setRed] = useState(false)

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header pos={pos} green={green} red={red} />
                <Body arr={arr} pos={pos} />
                <Footer arr={arr} pos={pos} setGreen={setGreen} setRed={setRed} setPos={setPos} />
            </View>
        </SafeAreaView>
    )
}

export default Pokedex