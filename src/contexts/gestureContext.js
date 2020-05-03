import React, { createContext, useState, useContext} from 'react'
import {
    Animated,
    PanResponder,
} from 'react-native'
import { Easing } from 'react-native-reanimated';

import { HuntContext } from './huntContext'

export const GestureContext = createContext()

function GestureProvider({children}){

    
    let textPosition = { x: 0, y: 0 }
    let regionX1, regionX2, regionY1, regionY2
    
    const {handlePoke} = useContext(HuntContext)
    const [circle, setCircle] = useState({ x1: regionX1, x2: regionX2, y1: regionY1, y2: regionY2 })
    const [isLoadingPokeball, setIsLoadingPokeball] = useState(true)

    // Declara uma nova instância do objeto Animated
    spinValue = new Animated.Value(0)
    spinPokeballValue= new Animated.Value(0)


    // Função que define as propriedades da animação
    Animated.timing(
    spinValue,
    {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true
    }
    ).start()
    // Animated.loop permite que a animação contida, seja repetida toda vez que se encerra.
    Animated.loop(
        Animated.timing(
            spinPokeballValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            }
            )
    ).start()
    
    // Interpolate -> interpola os valores antes de atualizar as propriedades 
    const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
    })

    const spinPokeball = this.spinPokeballValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    // Declara uma nova instância do objeto Animated com valores X e Y, para animações em 2D e 3D
    const position = new Animated.ValueXY()
    // Função que retorna a posição mais recente ( GestureHandler )
    position.addListener(latestPosition => {
    textPosition = latestPosition
    })

    // Constante que recebe as respostas das funções declaradas no PanResponder
    const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    // Retorna o estado atual a cada movimento
    onPanResponderMove: (e, gestureState) => {
        const newPosition = { x: gestureState.dx, y: gestureState.dy }
        position.setValue(newPosition)
        // Verifica se a posição atual do usuário está dentro do círculo definido aleatoriamente.
        if ((Math.floor(newPosition.x) >= circle.x1 && Math.floor(newPosition.x) <= circle.x2)
            && (Math.floor(newPosition.y) >= circle.y1 && Math.floor(newPosition.y) <= circle.y2)) {
            setIsLoadingPokeball(false)
            handlePoke()
        }
    },
    // Define a ultima posição do gesto, como a posição inicial
    onPanResponderGrant: () => {
        position.setOffset({ x: textPosition.x, y: textPosition.y })
        position.setValue({ x: 0, y: 0 })
    },
    onPanResponderEnd: () => {
        position.flattenOffset()
    }
    })
    // Sorteia um círculo de diâmetro 50px 
    const sortRegion = () => {

    regionX1 = Math.floor(Math.random() * -200) + ((Math.random() * 9) % 2 == 0 ? - Math.random() * 200 : Math.random() * 200)
    regionX2 = regionX1 + 50
    regionY1 = Math.floor(Math.random() * -200) + ((Math.random() * 9) % 2 == 0 ? - Math.random() * 200 : Math.random() * 200)
    regionY2 = regionY1 + 50

    setCircle({ x1: regionX1, x2: regionX2, y1: regionY1, y2: regionY2 })
    }

      return(
          <GestureContext.Provider 
            value={{
                sortRegion, 
                panResponder, 
                position, 
                spin,
                isLoadingPokeball,
                setIsLoadingPokeball,
                spinPokeball 
            }}>
              {children}
          </GestureContext.Provider>
      )
  }

  export function useGesture() {
        const { 
        sortRegion, 
        panResponder, 
        position, 
        spin,
        isLoadingPokeball,
        setIsLoadingPokeball,
        spinPokeball  
    } = useContext(GestureContext)

    return {
        sortRegion, 
        panResponder, 
        position, 
        spin,
        isLoadingPokeball,
        setIsLoadingPokeball,
        spinPokeball
    }
        
  }

  export default GestureProvider