import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { useLight } from '../../../contexts/lightContext'

export default function Details() {
    
    const {select,setSelect} = useLight()

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
