import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Details({ arr }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxButton}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonTitle}>Select</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
