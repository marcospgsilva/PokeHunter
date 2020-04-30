import React, { useState } from 'react'
import {
    View,
    SafeAreaView
} from 'react-native'

import styles from './styles'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function Pokedex() {

    const [pos, setPos] = useState(0)

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header pos={pos} />
                <Body  pos={pos} />
                <Footer pos={pos} setPos={setPos} />
            </View>
        </SafeAreaView>
    )
}

export default Pokedex