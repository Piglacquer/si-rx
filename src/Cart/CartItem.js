import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { useCartStore } from '../common/CartProvider';
import { useShopifyStore } from '../common/ShopifyProvider';
import './CartItem.scss';

const CartItem = ({item, cart}) => {
	const { shopify } = useShopifyStore();
	const { removeItemFromCart } = useCartStore();
	console.warn('yeet item', item);
	return (
			<ListGroup.Item className='item-container'>
				<img className='item-image' alt={item.title} src={item.variant.image.src}/>
				<div className='item-info-container'>
					<p>{item.title}</p>
					<p>{item.variant.title}</p>
					<p>{`$${item.variant.price}`}</p>
					<p className='item-quantity'>{`Qty: ${item.quantity}`}</p>
				</div>
				<p className='item-availability'>{item.variant.available ? 'In Stock' : 'Out of Stock'}</p>
				<Button className='remove-button' variant='danger' onClick={() => removeItemFromCart(item.id, shopify, cart)}>X</Button>
			</ListGroup.Item>
	)
};

export default CartItem;