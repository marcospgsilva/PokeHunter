import React, {useContext, useState} from 'react';
import { View, Animated, Text, Image } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

import Diamond from '../../../assets/diamond.png'

import { GestureContext } from '../../../contexts/gestureContext';
import { HuntContext } from '../../../contexts/huntContext';

export default function PokeCard() {
    
    const { img, name, value } = useContext(HuntContext)
    const { spin } = useContext(GestureContext)
    const [load,setLoad] = useState(false)

    return (
                <Animated.View
                style={[styles.cardMatch, { transform: [{ rotateY: spin }] }]}>
                {load && <LottieView hardwareAccelerationAndroid resizeMode="cover" imageAssetsFolder={'../../../assets/animation.json'} source={require('../../../assets/animation.json')} autoPlay loop />}
                <Image onLoadStart={()=>{setLoad(true)}} onLoadEnd={()=>{setLoad(false)}} source={{ uri: `${img}` }} style={styles.pokeImage} resizeMode="contain" />
                <Text style={styles.titleName}>{name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Diamond} resizeMode="contain" style={styles.imageDiamond} />
                    <Text style={styles.value}>{value}</Text>
                </View>
            </Animated.View>
    );
}
