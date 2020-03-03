import React from 'react';

const CartItem = ({item}) => {
	return (
		<div>
			<p>{item.title}</p>
			<p>{item.variant.title}</p>
			<p>{item.variant.price}</p>
		</div>
	)
};

export default CartItem;