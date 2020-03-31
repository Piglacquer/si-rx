import React from 'react';
import { Link } from '@reach/router';
import logo from '../SIRX-logo.png';
import { useCartStore } from '../common/CartProvider';
import './NavBar.scss';

const NavBar = () => {
	const { cart } = useCartStore();
	const { lineItems } = cart;
	
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Link to='/'>
					<img className='logo' alt='sirx-logo' src={logo} />
				</Link>
			</div>
			<div className='links-container'>
				{/* <Link className='link' to='/blog'>Blog</Link> */}
				<Link className='link' to='shop'>Shop</Link>
				<Link className='link' to='cart'>
					Cart
						{lineItems?.length > 0 && <p className='items-number'>{lineItems?.length}</p>}
				</Link>
			</div>
		</div>
)};

export default NavBar;