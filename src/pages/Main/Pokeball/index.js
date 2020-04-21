import React from 'react';
import { Animated, Image } from 'react-native';


import PokeballImg from '../../../assets/pokeball.png'

import styles from './styles';

export default function Pokeball({ panResponder, position }) {
    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[styles.card, position.getLayout()]}>

            <Image source={PokeballImg} style={styles.pokeball} resizeMode="contain" />
        </Animated.View>
    );
}
