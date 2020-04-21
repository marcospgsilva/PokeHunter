import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import Pokeball from '../Pokeball'
import PokeCard from '../PokeCard';
import HuntButton from '../HuntButton';

export default function Body({
    panResponder,
    position,
    spin,
    img,
    name,
    isLoadingPoke,
    isLoadingPokeball,
    value,
    sortRegion,
    setIsLoadingPoke,
    setIsLoadingPokeball
}) {
    return (
        <View style={styles.body}>
            {isLoadingPokeball
                ? <Pokeball panResponder={panResponder} position={position} />
                : <></>
            }
            {isLoadingPoke && <PokeCard spin={spin} img={img} name={name} value={value} />}
            {isLoadingPoke && <HuntButton sortRegion={sortRegion} setIsLoadingPoke={setIsLoadingPoke} setIsLoadingPokeball={setIsLoadingPokeball} />}
        </View>
    );
}
