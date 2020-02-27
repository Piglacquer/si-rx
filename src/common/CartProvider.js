import  React, { useState, useCallback } from 'react';

const Context = React.createContext();

export const CartProvider = ({children}) => {
	const [ cart, setCart ] = useState([]);

	const addItemToCart = useCallback(item => setCart(cart => ([...cart, item])), [setCart]);
	const removeItemFromCart = useCallback(item => setCart(cart => cart.filter(cartItem => cartItem.name !== item.name)), [setCart])

	const value = { cart, addItemToCart, removeItemFromCart };

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export const useCartStore = () => React.useContext(Context);