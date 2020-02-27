import React, { useState } from 'react';
import { Dropdown, Card } from 'react-bootstrap';
import './Product.scss';

const Product = ({item}) => {
	const [size, setSize] = useState('Size');
	const { 
		title,
		description,
		images,
		options,
	} = item;

	console.warn('yeet item', item);
	return (
		<Card className='product-container'>
			<Card.Header>{title}</Card.Header>
			<Card.Img variant='top' src={images[0].src} />
			<Card.Body>
				<Card.Text>{description}</Card.Text>
				<Dropdown>
					<Dropdown.Toggle variant='info' id='dropdown-basic'>
						{size}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{options[0].values.map((option, index) => (
							<Dropdown.Item key={`${option.value}${index}`} onClick={() => setSize(option.value)}>{option.value}</Dropdown.Item>
							)
						)}
					</Dropdown.Menu>
				</Dropdown>
			</Card.Body>
		</Card>
	)
}

export default Product;