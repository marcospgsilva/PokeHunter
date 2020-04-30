import React, { createContext, useState, useContext } from 'react'


export const LightContext = createContext()

function LightProvider({children}) {

    const [green, setGreen] = useState(false)
    const [red, setRed] = useState(false)
    const [select, setSelect] = useState(false)

    return (
        <LightContext.Provider value={{ green, setGreen, red, setRed, select,setSelect }}>
            {children}
        </LightContext.Provider>
    );
}

export function useLight() {
    const context = useContext(LightContext)

    const { green, setGreen, red, setRed } = context

    return { green, setGreen, red, setRed }
}

export default LightProvider 