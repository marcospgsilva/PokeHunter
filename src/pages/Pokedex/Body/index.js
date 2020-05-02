import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';

import { useTutorial } from '../../../contexts/tutorialContext'

import styles from './styles';

import BoxWindow from '../BoxWindow';

export default function Body({ pos }) {
    
    const { setPokedexModal, pokedexModal } = useTutorial()
    
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={pokedexModal}
                >
                    <View style={styles.modalPokedexContainer}>
                        <View style={styles.modalSubContainer}>
                            <Text style={styles.modalTitle}>{ 
                                `Here you can see all the Pokemons you hunted during your journey`}
                            </Text>
                            <View style={styles.modalButtonContainer}>
                                <TouchableOpacity style={styles.modalButton}
                                    onPress={()=>{
                                        setPokedexModal(false)
                                        }}>
                                    <Text style={styles.modalButtonTitle}>
                                        OK
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            <BoxWindow pos={pos} />
        </View>
    );
}
