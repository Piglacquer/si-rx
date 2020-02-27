import  React, { useState, useCallback } from 'react';

const Context = React.createContext();

export const ProductsProvider = ({children}) => {
	const [ products, addProducts ] = useState([]);

	const setProducts = useCallback(products => addProducts([products]), [addProducts]);

	const value = { products, setProducts };

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export const useProductsStore = () => React.useContext(Context);