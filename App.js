import React from 'react';

import Routes from './src/routes'

import Context from './src/store/context'

export default function App() {

  return (
    <Context>
      <Routes />
    </Context>
  )
}
