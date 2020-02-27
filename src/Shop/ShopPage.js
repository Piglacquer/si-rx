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

	return (
		<div className='shop-page'>
			<p>SHOPPINGGGG HEADERRRRR</p>
			{!isEmpty(products) && products.map(product => <Product key={product[0].id} item={product[0]}/>)}
		</div>
	)
};

export default ShopPage;