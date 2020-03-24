import React from 'react';
import { Router } from '@reach/router';
import HomePage from '../Home/HomePage';
import ShopPage from '../Shop/ShopPage';
import BlogPage from '../Blog/BlogPage';
import CartPage from '../Cart/CartPage';

const AppRouter = () => (
	<Router>
		<HomePage path='/' />
		<ShopPage path='/shop' />
		{/* <BlogPage path='/blog' /> */}
		<CartPage path='/cart' />
	</Router>
);

export default AppRouter;