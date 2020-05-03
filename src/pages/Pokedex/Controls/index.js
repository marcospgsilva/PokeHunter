import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useLight,  } from '../../../contexts/lightContext'
import { useHunt } from '../../../contexts/huntContext'

import styles from './styles';

import ArrowRight from '../../../assets/arrowRight.png'
import ArrowLeft from '../../../assets/arrowLeft.png'

export default function Controls({ pos, setPos }) {

    const { arr } = useHunt()
    const { setRed, setGreen, select,setSelect } = useLight()

    // Adiciona + 1 na variável POS, para acessar o próximo indice no array de Pokemons.
    const addPos = () => {
        // Não permite que um indice que não existe seja acessado.
        if (pos < (arr.length - 1)) {
            setPos(pos + 1)
        }
    }
    // Adiciona + 1 na variável POS, para acessar o próximo indice no array de Pokemons.
    const subPos = () => {
        // Não permite que um indice que não existe seja acessado.
        if (pos != 0) {
            setPos(pos - 1)
        }
    }
    // Controla o estado das luzes da pokedex.
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
