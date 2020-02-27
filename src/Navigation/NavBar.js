import React from 'react';
import { Link } from '@reach/router';
import logo from '../SIRX-logo.png';
import './NavBar.scss';

const NavBar = () => (
	<div className='nav-container'>
		<div className='logo-container'>
			<Link to='/'>
				<img className='logo' alt='sirx-logo' src={logo} />
			</Link>
		</div>
		<div className='links-container'>
			<Link className='link' to='/blog'>Blog</Link>
			<Link className='link' to='/shop'>Shop</Link>
			<Link className='link' to='/cart'>Cart</Link>
		</div>
	</div>
);

export default NavBar;