import React from 'react';
import { Card } from 'react-bootstrap';
import Checkout from './Checkout';
import './CartSummary.scss';

const CartSummary = ({cart}) => {
	return (
		<Card className='summary-container'>
			<Card.Title>Order Summary</Card.Title>
			<div className='summary-section'>
				<p>Subtotal:</p>
				<p>{`$${cart.subtotalPrice}`}</p>
			</div>
			<div className='summary-section'>
				<p>Estimated shipping:</p>
				<p>{cart.lineItems && cart.lineItems.length > 0 ? '$5.00' : '$0.00'}</p>
			</div>
			<div className='summary-section'>
				<p>Tax:</p>
				<p>{`$${cart.totalTax}`}</p>
			</div>
			<Checkout cartUrl={cart.webUrl} disabled={!cart?.lineItems?.length > 0}/>
		</Card>
	)
};

export default CartSummary;