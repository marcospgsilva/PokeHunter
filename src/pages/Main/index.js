import React, { useContext, useEffect } from 'react';
import {
    View,
    StatusBar,
    ImageBackground,
    SafeAreaView,
    Platform
} from 'react-native';

import { GestureContext } from '../../contexts/gestureContext'

import styles from './styles'

import Background from '../../assets/background.jpg'

import Header from './Header'
import Body from './Body'
import PokedexButton from './PokedexButton'

export default function App({ navigation }) {

    const { sortRegion } = useContext(GestureContext)

    useEffect(() => {
        sortRegion()
    }, [])
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <StatusBar barStyle={Platform.OS === "ios" ? 'light-content' : 'light-content'} />
                <ImageBackground
                    source={Background}
                    style={styles.imageBackground}
                >
                    <Header/>
                    <Body/>
                    <PokedexButton navigation={navigation} />
                </ImageBackground>
            </View>
        </SafeAreaView >
    )
}
