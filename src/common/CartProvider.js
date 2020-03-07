import  React, { useState, useCallback } from 'react';

const Context = React.createContext();

export const CartProvider = ({children}) => {
	const [ cart, setCart ] = useState({});

		// item format:
		// [{
		// 	variantId: String,
		// 	quantity: Number,
		// 	customAttributes: [{}]
		// }, 
		// {...}]

	const addItemToCart = useCallback((item, shopify, cart) => {
		const { id: checkoutId } = cart;
		if (item && shopify) {
			return shopify.checkout.addLineItems(checkoutId, item).then(updatedCart => {
				return setCart(updatedCart)
			});
		}
		console.warn('yeet unable to add item to cart');
		return;
	}, [setCart]);
	
	const incrementItemInCart = useCallback(({cartId, item, shopify}) => {
		if (cartId && item && shopify) {
			return shopify.checkout.updateLineItems(cartId, item).then(updatedCart => {
				return setCart(updatedCart);
			})
		}
		return;
	}, [setCart]);

	const removeItemFromCart = useCallback((item, shopify, cart) => {
		const { id: checkoutId } = cart;
		if(item && shopify) {
			return shopify.checkout.removeLineItems(checkoutId, item).then(updatedCart => {
				return setCart(updatedCart);
			})
		}
		console.warn('yeet unable to remove item from cart');
		return;
	}, [setCart]);

	const createCart = useCallback(initialCart => setCart(cart => initialCart), [setCart]);

	const value = { cart, createCart, addItemToCart, incrementItemInCart, removeItemFromCart };

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export const useCartStore = () => React.useContext(Context);