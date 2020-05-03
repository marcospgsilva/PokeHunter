import React, { useContext } from 'react';
import { Animated, Image } from 'react-native';


import PokeballImg from '../../../assets/pokeball.png'

import styles from './styles';

import { GestureContext } from '../../../contexts/gestureContext';

export default function Pokeball() {

    const { spinPokeball } = useContext(GestureContext)
    const { panResponder, position } = useContext(GestureContext)

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[
                styles.card, 
                position.getLayout()
                ]}>

            <Animated.Image source={PokeballImg} style={[styles.pokeball, { transform: [{ rotate: spinPokeball }] }]} resizeMode="contain" />
        </Animated.View>
    );
}
