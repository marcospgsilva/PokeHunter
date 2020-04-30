import React, { useContext } from 'react';
import { View } from 'react-native';

import styles from './styles';

import Pokeball from '../Pokeball'
import PokeCard from '../PokeCard';
import HuntButton from '../HuntButton';

import { HuntContext } from '../../../contexts/huntContext';
import { GestureContext } from '../../../contexts/gestureContext';

export default function Body() {

    const {isLoadingPoke} = useContext(HuntContext)
    const {isLoadingPokeball} = useContext(GestureContext)
    
    return (

        <View style={styles.body}>
            {isLoadingPokeball
                ? <Pokeball />
                : <></>
            }
            {isLoadingPoke && <PokeCard />}
            {isLoadingPoke && <HuntButton />}
        </View>
    );
}
