import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CartItem from './CartItem';
import { useCartStore } from '../common/CartProvider';
import './CartPage.scss';

const CartPage = () => {
	const { cart } = useCartStore();
	console.warn('yeet cart', cart);

	return (
		<div className='cart-page'>
			<h1 className='page-header'>Cart</h1>
			<ListGroup>
				{cart?.lineItems && cart.lineItems.map((item, index) => <CartItem key={item.id} item={item} cart={cart}/>)}
			</ListGroup>
		</div>
	)
}

export default CartPage;