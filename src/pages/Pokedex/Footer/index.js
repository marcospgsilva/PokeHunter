import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Controls from '../Controls'
import Details from '../Details'

export default function Footer({ pos, setPos }) {
    return (
        <View style={styles.container}>
            <Details  />
            <Controls pos={pos} setPos={setPos} />
        </View>
    );
}
