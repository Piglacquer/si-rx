import React from 'react';
import CartItem from './CartItem';
import { useShopifyStore } from '../common/ShopifyProvider';
import { useCartStore } from '../common/CartProvider';

const CartPage = () => {
	const { shopify } = useShopifyStore();
	const { cart, removeItemFromCart } = useCartStore();
	console.warn('yeet cart', cart);
	// const { lineItems } = cart;
	return (
		<div>
			{cart?.lineItems && cart.lineItems.map((item, index) => <CartItem key={item.id} item={item} />)}
		</div>
	)
}

export default CartPage;