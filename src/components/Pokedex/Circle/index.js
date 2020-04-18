import React from 'react';
import { View } from 'react-native';

import styles from './styles';

export default function Circle({ MediumColor, SmallColor }) {
    return (
        <View style={styles.container}>
            <View style={[styles.circle2x, { backgroundColor: MediumColor }]}>
                <View style={[styles.circle1x, { backgroundColor: SmallColor }]} >
                </View>
            </View>
        </View>
    );
}
