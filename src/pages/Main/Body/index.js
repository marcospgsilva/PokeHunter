import React from 'react';
import { 
    View,
    Modal,
    Text,
    TouchableOpacity
 } from 'react-native';

import { useTutorial } from '../../../contexts/tutorialContext'

import styles from './styles';

import Pokeball from '../Pokeball'
import PokeCard from '../PokeCard';
import HuntButton from '../HuntButton';

import { useHunt } from '../../../contexts/huntContext';
import { useGesture } from '../../../contexts/gestureContext';

export default function Body() {

    const {isLoadingPoke} = useHunt()
    const {isLoadingPokeball} = useGesture()

    const { setWelcomeVisible, welcomeVisible, huntVisible, setHuntVisible } = useTutorial()

    return (

        <View style={styles.body}>
            {isLoadingPokeball
                ? <>
                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={welcomeVisible}
                    >
                        <View style={styles.modalWelcomeContainer}>
                            <View style={styles.modalSubContainer}>
                                <Text style={styles.modalTitle}>{ 
                                    `Welcome to PokemonHunter!\nNow your pokemon journey will begin and you will become a Pokemon Master.`}
                                </Text>
                                <View style={styles.modalButtonContainer}>
                                    <TouchableOpacity style={styles.modalButton}
                                        onPress={()=>{
                                            setWelcomeVisible(false)
                                            setHuntVisible(true)
                                            }}>
                                        <Text style={styles.modalButtonTitle}>
                                                OK
                                            </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={huntVisible}
                    >
                        <View style={styles.modalHuntContainer}>
                            <View style={styles.modalSubContainer}>
                                <Text style={styles.modalTitle}>{ 
                                    'To hunt a pokemon, just move your pokeball around the map until find one.\nAfter capture, your pokemon will be avaliable in your POKEDEX.'}
                                </Text>
                                <View style={styles.modalButtonContainer}>
                                    <TouchableOpacity style={styles.modalButton}
                                        onPress={()=>{setHuntVisible(false)}}>
                                        <Text style={styles.modalButtonTitle}>
                                                Let's Go
                                            </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Pokeball />
                </>
                : <></>
            }
            {isLoadingPoke && <PokeCard />}
            {isLoadingPoke && <HuntButton />}
        </View>
    );
}
