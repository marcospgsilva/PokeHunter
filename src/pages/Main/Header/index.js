import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import Avatar from '../../../assets/fotomp.jpg'
import Star from '../../../assets/star.png'
import Diamond from '../../../assets/diamond.png'

export default function Header({ diamond }) {

    return (
        <View style={styles.header}>
            <View style={styles.avatarBox}>
                <Image
                    source={Avatar}
                    style={styles.avatarImage} />
            </View>
            <View style={styles.boxBarPerson}>
                <View style={styles.boxStar}>
                    <Image source={Star} style={styles.star} />
                    <Text style={styles.level}>Lv. 1</Text>
                </View>
                <View style={styles.boxDiamond}>
                    <Image source={Diamond} style={styles.diamond} />
                    <Text style={styles.diamondNumber}>{diamond}</Text>
                </View>
            </View>
        </View>
    );
}
