import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'

export const CartContext = createContext()

const ContextProvider = ({ children }) => {
    // is a function used to send actions to a reducer to update the state
    //  based on the action type and payload.
    const [cart, dispatch] = useReducer(CartReducer, [])
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default ContextProvider