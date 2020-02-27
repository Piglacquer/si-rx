import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Client from 'shopify-buy';
import createStoreProvider from './common/createStoreProvider';
import { CartProvider } from './common/CartProvider';
import { ProductsProvider } from './common/ProductsProvider';
import { ShopifyProvider } from './common/ShopifyProvider';

const client = Client.buildClient({
	domain: 'sirx-mobility.myshopify.com',
	storefrontAccessToken: 'b4097c6af6c9f722ca6767dae4c7c975',
});

const StoreProvider = createStoreProvider([
	ProductsProvider,
	CartProvider,
	ShopifyProvider,
])

client.product.fetchAll()

ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
