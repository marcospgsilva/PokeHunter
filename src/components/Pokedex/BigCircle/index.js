import React from 'react';
import { View, SafeAreaView } from 'react-native';

import styles from './styles';

export default function MediumCircle({ MediumColor, SmallColor }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.bigCircle}>
                <View style={styles.mediumCircle}>
                    <View style={styles.smallCircle}>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
