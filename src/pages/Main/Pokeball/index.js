import React, { useContext } from 'react';
import { Animated, Image } from 'react-native';


import PokeballImg from '../../../assets/pokeball.png'

import styles from './styles';

import { GestureContext } from '../../../contexts/gestureContext';

export default function Pokeball() {

    const { panResponder, position } = useContext(GestureContext)

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[styles.card, position.getLayout()]}>

            <Image source={PokeballImg} style={styles.pokeball} resizeMode="contain" />
        </Animated.View>
    );
}
