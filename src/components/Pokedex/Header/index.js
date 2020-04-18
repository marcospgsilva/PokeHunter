import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import BigCircle from '../BigCircle'
import MediumCircle from '../MediumCircle'

export default function Header() {
    return (
        <View style={styles.container}>
            <BigCircle />
            <MediumCircle />
        </View>
    );
}
