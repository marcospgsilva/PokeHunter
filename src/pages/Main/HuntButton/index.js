import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import { useGesture } from '../../../contexts/gestureContext';
import { useHunt } from '../../../contexts/huntContext';

export default function HuntButton() {
    
    const { setIsLoadingPokeball, sortRegion } = useGesture()
    const { setIsLoadingPoke } = useHunt()

    return (
        <View style={styles.buttonBox}>
            <TouchableOpacity onPress={() => {
                sortRegion()
                setIsLoadingPoke(false)
                setIsLoadingPokeball(true)
            }} hitSlop={{ top: 30, left: 150, bottom: 30, right: 150 }} >
                <Text style={styles.buttonTitle}>Caçar Pokemon!</Text>
            </TouchableOpacity>
        </View>
    );
}
