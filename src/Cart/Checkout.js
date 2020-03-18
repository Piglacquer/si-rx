import React from 'react';
import { Button } from 'react-bootstrap';

const Checkout = ({ cartUrl }) => {
	return (
		<>
			<Button href={cartUrl} variant='outline-success'>CHECKOUT</Button>
		</>
	);
}

export default Checkout;