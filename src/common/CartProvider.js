import  React, { useState, useCallback } from 'react';

const Context = React.createContext();

export const CartProvider = ({children}) => {
	const [ cart, setCart ] = useState({});

	const addItemToCart = useCallback((item, shopify, cart) => {
		const { id: checkoutId } = cart;
		// item format:
		// [{
		// 	variantId: String,
		// 	quantity: Number,
		// 	customAttributes: [{}]
		// }, 
		// {...}]

		if (item && shopify) {
			shopify.checkout.addLineItems(checkoutId, item).then(updatedCart => {
				console.warn('yeet item added to cart', updatedCart);
				return setCart(updatedCart)
			});
		}

		console.warn('yeet unable to add item to cart');
		return setCart({...cart});
	}, [setCart]);
		
	const removeItemFromCart = useCallback(item => setCart(cart => cart.filter(cartItem => cartItem.name !== item.name)), [setCart]);

	const createCart = useCallback(initialCart => setCart(cart => initialCart), [setCart]);

	const value = { cart, createCart, addItemToCart, removeItemFromCart };

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export const useCartStore = () => React.useContext(Context);