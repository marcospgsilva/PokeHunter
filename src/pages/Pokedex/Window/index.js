import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

export default function Window({ arr, pos }) {

    return (
        <View style={styles.container}>
            <View style={styles.windowBox}>
                {arr[pos] &&
                    <>

                        <Image
                            source={{ uri: `${arr[pos].img}` }}
                            style={{ width: '100%', height: '60%' }}
                            resizeMode="contain"
                        />

                        <View style={{ flex: 1, backgroundColor: '#444' }}>

                        </View>
                    </>
                }
            </View>
        </View>
    );
}
