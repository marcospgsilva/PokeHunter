import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import {LightContext} from '../../../store/context'

export default function Details({ arr }) {
    
    const context = useContext(LightContext)
    const {select,setSelect} = context

    const selectPoke = () => {
        if(select){
            setSelect(false)
        } else {
            setSelect(true)
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.boxButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={selectPoke}
                >
                    <Text style={styles.buttonTitle}>Select</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
