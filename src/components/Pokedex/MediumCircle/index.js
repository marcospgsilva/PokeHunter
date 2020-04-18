import React from 'react';

import styles from './styles';

import Circle from '../Circle'
import { View } from 'react-native';

export default function MediumCircle() {
    return (
        <View style={styles.container}>
            <Circle MediumColor={'#FF0000'} SmallColor={'#FE98CB'} />
            <Circle MediumColor={'#FECB65'} SmallColor={'#FEFECB'} />
            <Circle MediumColor={'#32CB65'} SmallColor={'#98FE00'} />
        </View>
    );
}
