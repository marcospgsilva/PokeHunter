import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import PokedexImg from '../../../assets/pokedex.png'

export default function PokedexButton({ navigation }) {

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.buttonPokedex}
                title="Pokedex"
                onPress={() => {
                    navigation.navigate('Pokedex')
                }}>
                <Image
                    source={PokedexImg}
                    style={styles.pokedexImg}
                    resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
}
