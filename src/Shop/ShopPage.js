import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useShopifyStore } from '../common/ShopifyProvider';
import { useProductsStore } from '../common/ProductsProvider';

const ShopPage = () => {
	const {
    products,
    setProducts,
	} = useProductsStore();
	const { shopify	} = useShopifyStore();

	useEffect(() => {
		if (isEmpty(products)) {
			shopify.product.fetchAll().then(res => setProducts(res));
		}
	})

	console.warn('yeet products', products);
	return (
		<div>
			<p>SHOPPINGGGG</p>
			{!isEmpty(products) && products.map(product => {
				console.warn('yeet product[0].images[0]', product[0].images[0].src);
				return (
				<img className='product-image' src={product[0].images[0].src} alt='product' />
				// console.warn('yeet product', product[0].images)
			)}
			)}
		</div>
	)
};

export default ShopPage;