import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import AppRouter from './Navigation/Router';
import NavBar from './Navigation/NavBar';
import { useShopifyStore } from './common/ShopifyProvider';
import { useCartStore } from './common/CartProvider';
import './App.scss';

const App = () => {
  const { shopify } = useShopifyStore();
  const { createCart, cart } = useCartStore();

  useEffect(() => {
    if (isEmpty(cart)) {
      shopify.checkout.create().then(initialCart => createCart(initialCart));
    }
  });

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

// export default App;
export default App;