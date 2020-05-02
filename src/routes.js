import React from 'react'
import {StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Pokedex from './pages/Pokedex'
import SignIn from './pages/SignIn'

function Routes() {

    const Stack = createStackNavigator()

    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
            <NavigationContainer>
                <Stack.Navigator
                    headerMode={false}
                    >
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="Pokedex" component={Pokedex} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes