import React, { useContext, useEffect } from 'react';
import {
    View,
    ImageBackground,
    SafeAreaView
} from 'react-native';

import { GestureContext } from '../../contexts/gestureContext'

import styles from './styles'

import Background from '../../assets/background.jpg'

import Header from './Header'
import Body from './Body'
import PokedexButton from './PokedexButton'

export default function App({ navigation, route }) {

    const { sortRegion } = useContext(GestureContext)

    const { nickname } = route.params
    // Chama a função para sortear uma região no mapa, assim que a tela principal é carregada.
    useEffect(() => {
        sortRegion()
    }, [])
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ImageBackground
                    source={Background}
                    style={styles.imageBackground}
                >
                    <Header nickname={nickname}/>
                    <Body/>
                    <PokedexButton navigation={navigation} />
                </ImageBackground>
            </View>
        </SafeAreaView >
    )
}
