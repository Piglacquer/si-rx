import React, { useState } from 'react';
import { Dropdown, Card, Carousel, Button, Alert } from 'react-bootstrap';
import { useCartStore } from '../common/CartProvider';
import { useShopifyStore } from '../common/ShopifyProvider';
import './Product.scss';

const addToCart = ({addItemToCart, shopify, cart, size, quantity, incrementItemInCart}) => {
		if (size.variantId) {
			const { lineItems, id: cartId } = cart;
			const itemInCart = lineItems.find(cartItem => cartItem.variant.id === size.variantId);
			if (itemInCart) {
						const { quantity } = itemInCart;
						const itemToUpdate = [{ id: itemInCart.id, quantity: quantity + 1}];
						return incrementItemInCart({cartId, item: itemToUpdate, shopify});
			}
			const item = {
				variantId: size.variantId,
				quantity
			};
			return addItemToCart(item, shopify, cart);
		}
		return;
}

const createAlert = (type) => {
	const messages = {
		success: 'Added to cart!',
		noSize: 'Please select a size!',
		failure: 'An error has occured, please try again later'
	}

	const variants = {
		success: 'success',
		noSize: 'warning',
		failure: 'danger'
	}

return <Alert variant={variants[type]}>{messages[type]}</Alert>;
};

const Product = ({item}) => {
	const { addItemToCart, incrementItemInCart, cart } = useCartStore();
	const { shopify } = useShopifyStore();
	const [ size, setSize ] = useState({title: 'Size', variantId: null});
	const [ quantity, setQuantity ] = useState(1);
	const [ alert, setAlert ] = useState('')

	const { 
		title,
		description,
		images,
		variants,
	} = item;

	return (
		<Card className='product-container'>
			<Card.Header>{title}</Card.Header>
			{images.length > 0 && images.length < 2 && <Card.Img className='product-image' variant='top' src={images[0].src} />}
			{images.length > 0 && images.length >= 2 && (
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
				<div>{alert}</div>
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
					onClick={() => {
						if (size.variantId || variants.length <= 1) {
							addToCart({addItemToCart, shopify, cart, size, quantity, incrementItemInCart })
							return setAlert(createAlert('success'))
						}
						return setAlert(createAlert('noSize'))
					}}
				>
					Add To Cart
				</Button>
			</Card.Body>
		</Card>
	);
}

export default Product;