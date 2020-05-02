import React, { createContext, useState, useContext } from 'react'

export const TutorialContext = createContext()

function TutorialProvider ({children}) {
    
    const [welcomeVisible,setWelcomeVisible] = useState(true)
    const [huntVisible,setHuntVisible] = useState(false)
    const [pokedexModal,setPokedexModal] = useState(true)

    return (
        <TutorialContext.Provider value={{
            welcomeVisible,
            setWelcomeVisible,
            huntVisible,
            setHuntVisible,
            pokedexModal,
            setPokedexModal
        }}>
            {children}
        </TutorialContext.Provider>
    )
}

export function useTutorial () {
    const context = useContext(TutorialContext)
    const { welcomeVisible,
        setWelcomeVisible,
        huntVisible,
        setHuntVisible,
        pokedexModal,
        setPokedexModal } = context
        
        return {
            welcomeVisible,
            setWelcomeVisible,
            huntVisible,
            setHuntVisible,
            pokedexModal,
            setPokedexModal
        }
}

export default TutorialProvider