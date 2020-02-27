import  React, { useState, useCallback } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
	domain: 'sirx-mobility.myshopify.com',
	storefrontAccessToken: 'b4097c6af6c9f722ca6767dae4c7c975',
});

const Context = React.createContext();

export const ShopifyProvider = ({children}) => {
	const [ shopify, setShopify ] = useState(client);

	const value = { shopify };

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export const useShopifyStore = () => React.useContext(Context);