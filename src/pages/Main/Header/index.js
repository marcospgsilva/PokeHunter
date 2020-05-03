import React from 'react';
import { View, Image, Text } from 'react-native';
import { useHunt } from '../../../contexts/huntContext'

import styles from './styles';
import Avatar from '../../../assets/fotomp.jpg'
import Star from '../../../assets/star.png'
import Diamond from '../../../assets/diamond.png'


export default function Header({nickname}) {

    const { level, diamond } = useHunt()

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
                    <Text style={{fontWeight: 'bold', color:'#FFF', marginLeft: 10, fontSize: 15}}>{nickname}</Text>
                    <Text style={styles.level}>Lv.{level}</Text>
                </View>
                <View style={styles.boxDiamond}>
                    <Image source={Diamond} style={styles.diamond} />
                    <Text style={styles.diamondNumber}>{diamond}</Text>
                </View>
            </View>
        </View>
    );
}
