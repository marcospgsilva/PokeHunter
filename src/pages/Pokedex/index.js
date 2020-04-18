import React, { useState } from 'react'
import {
    View,
    SafeAreaView
} from 'react-native'

import styles from './styles'

import Header from '../../components/Pokedex/Header'
import Body from '../../components/Pokedex/Body'
import Footer from '../../components/Pokedex/Footer'

let render = null

function Pokedex({ route, navigation }) {

    const { arr } = route.params
    const [pos, setPos] = useState(0)
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header />
                <Body arr={arr} pos={pos} />
                <Footer arr={arr} pos={pos} setPos={setPos} />
            </View>
        </SafeAreaView>
    )
}

export default Pokedex