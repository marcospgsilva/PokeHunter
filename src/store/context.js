import React, { createContext, useState, useContext } from 'react'
import Routes from '../routes'

export const LightContext = createContext()

function Context() {

    const [green, setGreen] = useState(false)
    const [red, setRed] = useState(false)

    return (
        <LightContext.Provider value={{ green, setGreen, red, setRed }}>
            <Routes />
        </LightContext.Provider>
    );
}

export function useLight() {
    const context = useContext(LightContext)

    const { green, setGreen, red, setRed } = context

    return { green, setGreen, red, setRed }
}

export default Context 