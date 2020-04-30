import React,{useContext} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useLight, LightContext } from '../../../contexts/lightContext'

import styles from './styles';

import ArrowRight from '../../../assets/arrowRight.png'
import ArrowLeft from '../../../assets/arrowLeft.png'

export default function Details({ pos, setPos, arr }) {

    const { setRed, setGreen } = useLight()
    const context = useContext(LightContext)
    const {select,setSelect} = context

    const addPos = () => {
        if (pos < (arr.length - 1)) {
            setPos(pos + 1)
        }
    }

    const subPos = () => {
        if (pos != 0) {
            setPos(pos - 1)
        }
    }

    const rightClick = () => {
        if(select){
            setSelect(false)
        }
        setTimeout(() => {
            setGreen(false)
        }, 100)

        setGreen(true)
    }

    const leftClick = () => {
        if(select){
            setSelect(false)
        }
        setTimeout(() => {
            setRed(false)
        }, 100)

        setRed(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxButton1}>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                        subPos()
                        leftClick()
                    }}
                >
                    <Image source={ArrowLeft} style={{ width: 90, height: 90 }} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                        addPos()
                        rightClick()
                    }}
                >
                    <Image source={ArrowRight} style={{ width: 90, height: 90 }} resizeMode="contain" />
                </TouchableOpacity>
            </View>

        </View>
    );
}
