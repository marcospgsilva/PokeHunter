import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import BoxWindow from '../BoxWindow';

export default function Body({ arr, pos }) {
    return (
        <View style={styles.container}>
            <BoxWindow arr={arr} pos={pos} />
        </View>
    );
}
