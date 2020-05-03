import React, { createContext, useState, useContext } from 'react'
import api from '../services/api'

export const HuntContext = createContext()

const arr = []
const number = 1
let flag = false

function HuntProvider ({children}) {
    
    const [value, setValue] = useState(null)
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [pokeTypes,setPokeTypes] = useState([])
    const [level,setLevel] = useState(1)
    const [diamond, setDiamond] = useState(0)
    const [key, setKey] = useState(0)
    
    const [isLoadingPoke, setIsLoadingPoke] = useState(false)

    // Sorteia um número que será equivalente a um pokemon
    const sortPoke = () => {
        const sort = Math.floor(Math.random() * 807) + 1
        return sort
    }
    // Seta os dados do pokemon sorteado
    const handlePoke = async () => {
        
        let id = sortPoke()

        while (id === 641 || id === 648 || id === 745 || id === 412 || id === 718 || id === 413 || id === 421) {

            id = sortPoke()

        }

        const response = await api.get(`pokemon/${id}`)

        let name = response.data.name
        let type = response.data.types

        let img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

        setValue(id)
        setImg(img)
        setName(name)
        setPokeTypes(type)
        setDiamond(diamond + id)
        if(diamond >= level * 1000){
            setLevel(level + 1)
        }
        setKey(key + 1)
        arr.map(item => {
            if (item.id == id) {
                flag = true
                item.number = item.number + 1
            }
        })

        if (!flag) {
            arr.push({ img, key, id, number, name ,type})
        }
        setIsLoadingPoke(true)
    }
    
    
    return(
        <HuntContext.Provider 
            value={{
                value,
                img,
                name, 
                arr, 
                diamond, 
                level, 
                handlePoke,
                isLoadingPoke,
                setIsLoadingPoke
            }}>
            {children}
        </HuntContext.Provider>
    )
}

export function useHunt(){
    const {
        value,
        img,
        name, 
        arr, 
        diamond, 
        level, 
        handlePoke,
        isLoadingPoke,
        setIsLoadingPoke
    } = useContext(HuntContext)


    return {
        value,
        img,
        name, 
        arr, 
        diamond, 
        level, 
        handlePoke,
        isLoadingPoke,
        setIsLoadingPoke
    }
}

export default HuntProvider