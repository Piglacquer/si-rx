import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import './CartItem.scss';
import { useCartStore } from '../common/CartProvider';
import { useShopifyStore } from '../common/ShopifyProvider';

const CartItem = ({item, cart}) => {
	const { shopify } = useShopifyStore();
	const { removeItemFromCart } = useCartStore();

	return (
			<ListGroup.Item className='item-container'>
				<div>
					<p>{item.title}</p>
					<p>{item.variant.title}</p>
					<p>{item.variant.price}</p>
				</div>
				<Button onClick={() => removeItemFromCart(item.id, shopify, cart)}>Remove</Button>
			</ListGroup.Item>
	)
};

export default CartItem;