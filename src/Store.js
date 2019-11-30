import React, { useReducer, createContext } from 'react'
import reducer from './reducers/reducer'

export const Context = createContext()

export default function Store(props){

    let reducerHook = useReducer(reducer, 
        {
        color:'red',
        backgroundColor:'yellow'
    })

    return(
        <Context.Provider value={reducerHook}>
         {props.children}
       </Context.Provider>
    )
}



