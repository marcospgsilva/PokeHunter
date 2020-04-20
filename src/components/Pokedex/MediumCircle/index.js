import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import Circle from '../Circle'


export default function MediumCircle({ pos, green, red }) {
    return (
        <View style={styles.container}>
            {red == false
                ? <Circle MediumColor={'#FF0000'} SmallColor={'#FE98CB'} />
                : <Circle MediumColor={'#FF4444'} SmallColor={'#FF0000'} />
            }
            <Circle MediumColor={'#FECB65'} SmallColor={'#FEFECB'} />

            {green == true
                ? <Circle MediumColor={'#32CB65'} SmallColor={'#98FE00'} />
                : <Circle MediumColor={'#98FE00'} SmallColor={'#32CB65'} />
            }
        </View>
    );
}
