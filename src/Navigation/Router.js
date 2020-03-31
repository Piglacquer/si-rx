import React from 'react';
import { Router, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';
import HomePage from '../Home/HomePage';
import ShopPage from '../Shop/ShopPage';
// import BlogPage from '../Blog/BlogPage';
import CartPage from '../Cart/CartPage';

const RoutesContainer = posed.div({
	enter: { opacity: 1, delay: 200 },
	exit: { opacity: 0 }
});

const AppRouter = () => (
	<Location>
		{({location}) => (
			<PoseGroup>
				<RoutesContainer key={location.key}>
					<Router>
						<HomePage path='/' key={1} />
						<ShopPage path='shop' key={2}/>
						{/* <BlogPage path='/blog' /> */}
						<CartPage path='cart' key={3} />
					</Router>
				</RoutesContainer>
			</PoseGroup>
		)}
	</Location>
);


export default AppRouter;