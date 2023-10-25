import { createContext, useState, useEffect } from "react";
import all_products from '../../public/all_product';

export const ShopProvider = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_products.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);

    useEffect(() => {
        // Load cartItems from local storage when the component mounts
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    }

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => {
                const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
                updateLocalStorage(updatedCart);
                return updatedCart;
            });
        }
    }

    const updateLocalStorage = (cartData) => {
        // Save cartData to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartData));
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }

     const getTotalCardItem = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem+= cartItems[item];
            }
        }
        return totalItem
     }
    const contextValue = {
        
        getTotalCardItem,
        getTotalAmount,
        all_products,
        cartItems,
        addToCart,
        removeFromCart,
        
    }

    return (
        <ShopProvider.Provider value={contextValue}>
            {children}
        </ShopProvider.Provider>
    )
}

export default ShopContextProvider;
