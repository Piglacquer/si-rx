import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const Product = ({item}) => {
	const [size, setSize] = useState('Size');

	const { options } = item;
	console.warn('yeet options', options);

	return (
		<div>
			<p>I'm a product</p>
			<Dropdown>
				<Dropdown.Toggle id='dropdown-basic'>
					{size}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{options[0].values.map(option => <Dropdown.Item onClick={() => setSize(option.value)}>{option.value}</Dropdown.Item>)}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	)
}

export default Product;