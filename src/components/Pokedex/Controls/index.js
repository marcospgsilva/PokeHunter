import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import ArrowRight from '../../../../assets/arrowRight.png'
import ArrowLeft from '../../../../assets/arrowLeft.png'

export default function Details({ pos, setPos, arr }) {

    const addPos = () => {
        if (pos < (arr.length - 1)) {
            setPos(pos + 1)
        }
    }

    const subPos = () => {
        if (pos != 0) {
            setPos(pos - 1)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxButton1}>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                        subPos()
                    }}
                >
                    <Image source={ArrowLeft} style={{ width: 90, height: 90 }} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                        addPos()
                    }}
                >
                    <Image source={ArrowRight} style={{ width: 90, height: 90 }} resizeMode="contain" />
                </TouchableOpacity>
            </View>

        </View>
    );
}
