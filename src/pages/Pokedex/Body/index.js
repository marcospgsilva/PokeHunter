import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import BoxWindow from '../BoxWindow';

export default function Body({ pos }) {
    return (
        <View style={styles.container}>
            <BoxWindow pos={pos} />
        </View>
    );
}
