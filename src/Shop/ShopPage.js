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
			<h1 className='page-header'>Shop</h1>
			{!isEmpty(products) && products.map(product => <Product key={product.id} item={product}/>)}
		</div>
	)
};

export default ShopPage;