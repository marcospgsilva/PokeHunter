import React from 'react';

import Routes from './src/routes'

import LightProvider from './src/contexts/lightContext'

export default function App() {

  return (
    <LightProvider>
      <Routes />
    </LightProvider>
  )
}
