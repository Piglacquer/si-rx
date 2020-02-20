import React from 'react';
import { Link } from '@reach/router';
import './NavBar.scss';

const NavBar = () => (
	<div className='nav-container'>
		<div className='logo-container'>

		</div>
		<div className='links-container'>
			<Link className='link' to='/'>Home</Link>
			<Link className='link' to='/shop'>Shop</Link>
		</div>
	</div>
);

export default NavBar;