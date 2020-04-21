import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import PokedexImg from '../../../../assets/pokedex.png'

export default function PokedexButton({ navigation, arr }) {
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.buttonPokedex}
                title="Pokedex"
                onPress={() => {
                    navigation.navigate('Pokedex', { arr: arr })
                }}>
                <Image
                    source={PokedexImg}
                    style={styles.pokedexImg}
                    resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
}
