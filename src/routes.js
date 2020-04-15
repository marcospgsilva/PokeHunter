import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Pokedex from './pages/Pokedex'

function Routes() {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode={false}
            >
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Pokedex" component={Pokedex} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes