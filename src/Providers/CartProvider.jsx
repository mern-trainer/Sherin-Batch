import { createContext, useContext, useState } from "react";

const cartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([])

    return <cartContext.Provider value={{cartList, setCartList}}>
        { children }
    </cartContext.Provider>
}

export const useCart = () => useContext(cartContext)