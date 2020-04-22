import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Controls from '../Controls'
import Details from '../Details'

export default function Footer({ arr, pos, setPos }) {
    return (
        <View style={styles.container}>
            <Details arr={arr} />
            <Controls arr={arr} pos={pos} setPos={setPos} />
        </View>
    );
}
