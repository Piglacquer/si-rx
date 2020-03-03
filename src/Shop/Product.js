import React, { PureComponent, useState } from 'react';
import { Dropdown, Card, Carousel, Button } from 'react-bootstrap';
import { useCartStore } from '../common/CartProvider';
import { useShopifyStore } from '../common/ShopifyProvider';
import './Product.scss';

const addToCart = ({addItemToCart, shopify, cart, size, quantity}) => {
		if (size.variantId) {
			const item = {
				variantId: size.variantId,
				quantity
			};
	
			return addItemToCart(item, shopify, cart);
		}
		return;
}

const Product = ({item}) => {
	const { addItemToCart, cart } = useCartStore();
	const { shopify } = useShopifyStore();
	const [ size, setSize ] = useState({title: 'Size'});
	const [ quantity, setQuantity ] = useState(1)

	const { 
		title,
		description,
		images,
		variants,
	} = item;

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
				{variants.length > 1 && (
					<Dropdown>
						<Dropdown.Toggle variant='info' id='dropdown-basic'>
							{size.title}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{variants.map((variant, index) => (
								<Dropdown.Item
									key={`${variant.title}${index}`}
									onClick={() => setSize({title: variant.title, variantId: variant.id})}
								>
									{variant.title}
								</Dropdown.Item>
								)
							)}
						</Dropdown.Menu>
					</Dropdown>
				)}
				<Button
					variant='success'
					onClick={() => addToCart({addItemToCart, shopify, cart, size, quantity})}
				>
					Add To Cart
				</Button>
			</Card.Body>
		</Card>
	);
}

export default Product;