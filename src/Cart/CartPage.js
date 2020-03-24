import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { useCartStore } from '../common/CartProvider';
import './CartPage.scss';

const CartPage = () => {
	const { cart } = useCartStore();
	console.warn('yeet cart', cart);

	return (
		<div className='cart-page'>
			<h1 className='page-header'>Cart</h1>
			<div className='cart-summary-container'>
				<ListGroup className='item-list'>
					{cart?.lineItems && cart.lineItems.map((item, index) => <CartItem key={item.id} item={item} cart={cart}/>)}
					{cart?.lineItems?.length === 0 && (
						<p className='empty-cart-message'>Your cart is empty</p>
					)}
				</ListGroup>
				<CartSummary cart={cart}/>
			</div>
		</div>
	)
}

export default CartPage;