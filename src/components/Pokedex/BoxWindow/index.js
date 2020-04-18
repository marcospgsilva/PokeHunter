import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

import Window from '../Window'
import Circle from '../Circle'

import Bars from '../../../../assets/bars.png'

export default function BoxWindow({ arr, pos }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerBoxWindow}>
                <Circle MediumColor={'#FF0000'} SmallColor={'#FE98CB'} />
                <Circle MediumColor={'#FF0000'} SmallColor={'#FE98CB'} />
            </View>
            <Window arr={arr} pos={pos} />
            <Image source={Bars} style={{ alignSelf: 'center', width: 40, height: 40 }} resizeMode="contain" />
        </View>
    );
}
