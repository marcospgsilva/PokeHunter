import React, { useRef } from 'react'
import { 
    View,
    Text,
    Image, 
    TextInput,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'

import LogoIcon from '../../assets/logoIcon.png'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

function SignIn({navigation}) {

    const nicknameRef = useRef()

    const handleSignin = () => {
        
        const nickname = nicknameRef.current._lastNativeText

        navigation.navigate('Main', { nickname })
    }

    return(
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="position">
                <View style={styles.logoIcon}>
                    <Image source={LogoIcon} style={{width: 120, height: 120}} resizeMode="contain"/>
                </View>
                
                <View style={styles.header}>
                    <Text style={styles.welcomeMessage}>Welcome to</Text>
                    <View style={styles.logoBox}>
                        <Text style={styles.pokeLogoName}>Poke<Text style={styles.hunterLogoName}>Hunter</Text></Text>
                        </View>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={[styles.subtitle,{color: '#FFF',}]}>
                        All pokemons in your hand.
                    </Text>
                    <Text style={[styles.subtitle, {color: '#ffaa00',}]}>
                        Hunt them!
                    </Text>
                </View>
                <View>
                    <Text style={styles.nickname}>
                        Choose your Nickname
                    </Text>
                    <TextInput 
                        required 
                        ref={nicknameRef} 
                        placeholder="Nickname"
                        placeholderTextColor="#888" 
                        style={styles.inputBox}
                        />
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} 
                        onPress={()=> {
                            Keyboard.dismiss()
                            handleSignin()
                        }}>
                            <Text style={styles.buttonText}>
                                    Let's Go
                                </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidingView>
            </View>
    )
}

export default SignIn