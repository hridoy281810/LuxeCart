import {  createContext, useState } from "react";
import all_products from '../../public/all_product'
export const ShopProvider = createContext(null)
const getDefaultCart = () => {
    let cart = {};
    for(let i = 0; i < all_products.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart())

   const addToCart = (itemId)=> {
   setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
   }
   const removeFromCart = (itemId)=> {
   setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
   }

    const contextValue = {
        all_products,
        cartItems,
        addToCart,
        removeFromCart
    }

    return (
        <ShopProvider.Provider  value={contextValue}>
            {children}
        </ShopProvider.Provider>
    )
}
export default ShopContextProvider;