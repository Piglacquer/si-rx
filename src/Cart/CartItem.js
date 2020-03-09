import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import './CartItem.scss';
import { useCartStore } from '../common/CartProvider';
import { useShopifyStore } from '../common/ShopifyProvider';

const CartItem = ({item, cart}) => {
	const { shopify } = useShopifyStore();
	const { removeItemFromCart } = useCartStore();
	console.warn('yeet item', item);
	return (
			<ListGroup.Item className='item-container'>
				<div className='item-info-container'>
					<p>{item.title}</p>
					<p>{item.variant.title}</p>
					<p>{item.variant.price}</p>
				</div>
				<div className='item-quantity-remove-container'>
					<p>{`quantity: ${item.quantity}`}</p>
					<Button variant='danger' onClick={() => removeItemFromCart(item.id, shopify, cart)}>X</Button>
				</div>
			</ListGroup.Item>
	)
};

export default CartItem;