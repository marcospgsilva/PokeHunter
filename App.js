import React from 'react';

import Routes from './src/routes'

import LightProvider from './src/contexts/lightContext'
import HuntProvider from './src/contexts/huntContext'
import GestureProvider from './src/contexts/gestureContext'
import TutorialProvider from './src/contexts/tutorialContext' 

export default function App() {

  return (
    <HuntProvider>
      <GestureProvider>
        <LightProvider>
        <TutorialProvider>
          <Routes />
        </TutorialProvider>
        </LightProvider>
      </GestureProvider>
    </HuntProvider>
  )
}
