import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useShopifyStore } from '../common/ShopifyProvider';
import { useProductsStore } from '../common/ProductsProvider';
import Product from './Product';

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
			<p>SHOPPINGGGG HEADERRRRR</p>
			{!isEmpty(products) && products.map(product => <Product key={product[0].id} item={product[0]}/>)}
		</div>
	)
};

export default ShopPage;