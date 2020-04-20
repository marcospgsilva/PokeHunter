import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import BigCircle from '../BigCircle'
import MediumCircle from '../MediumCircle'

export default function Header({ pos, green, red }) {
    return (
        <View style={styles.container}>
            <BigCircle />
            <MediumCircle pos={pos} green={green} red={red} />
        </View>
    );
}
