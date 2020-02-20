import React from 'react';
import { Router } from '@reach/router';
import HomePage from '../Home/HomePage';
import ShopPage from '../Shop/ShopPage';

const AppRouter = () => (
	<Router>
		<HomePage path='/' />
		<ShopPage path='/shop' />
	</Router>
);

export default AppRouter;