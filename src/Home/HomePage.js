import React from 'react';
import Testimonials from './Testimionials';
import './HomePage.scss'

const HomePage = () => (
	<div>
		{/* // hero image */}
		<img className='hero-image' alt='hero' src={'https://c8.alamy.com/comp/T8KGM4/sportsman-building-arm-muscles-near-physical-therapy-T8KGM4.jpg'} />
		<Testimonials />
		{/* // videos */}
		{/* // information */}
		<p>IM HOME</p>
	</div>
);

export default HomePage;