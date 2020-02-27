import React, { useState } from 'react';
import { Dropdown, Card, Carousel } from 'react-bootstrap';
import './Product.scss';

const Product = ({item}) => {
	const [size, setSize] = useState('Size');
	const { 
		title,
		description,
		images,
		options,
	} = item;

	console.warn('yeet item', images[0]);
	return (
		<Card className='product-container'>
			<Card.Header>{title}</Card.Header>
			{images.length < 2 && <Card.Img className='product-image' variant='top' src={images[0].src} />}
			{images.length >= 2 && (
				<Carousel>
					{images.map((image, index)=> (
						<Carousel.Item key={`${image.src}${index}`}>
							<img className='product-image' src={image.src} alt='product' />
						</Carousel.Item>
					))}
				</Carousel>
			)}
			<Card.Body>
				<Card.Text>{description}</Card.Text>
				{options[0].values.length > 1 && (
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
				)}
			</Card.Body>
		</Card>
	)
}

export default Product;