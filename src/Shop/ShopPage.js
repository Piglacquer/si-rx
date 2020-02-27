import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useShopifyStore } from '../common/ShopifyProvider';
import { useProductsStore } from '../common/ProductsProvider';
import Product from './Product';
import './ShopPage.scss';

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
	console.warn('yeet products', products[0]);
	return (
		<div className='shop-page'>
			<p>SHOPPINGGGG HEADERRRRR</p>
			{!isEmpty(products) && products[0].map(product => <Product key={product.id} item={product}/>)}
		</div>
	)
};

export default ShopPage;