import React from 'react';
import { Button } from 'react-bootstrap';

const Checkout = ({ cartUrl, disabled }) => {
	console.warn('yeet disabled', disabled);
	return (
		<>
			<Button 
				disabled={disabled}
				href={cartUrl}
				variant={disabled ? 'secondary' : 'outline-success'}
			>
				CHECKOUT
			</Button>
		</>
	);
}

export default Checkout;