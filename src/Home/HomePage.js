import React from 'react';
import PosedContainer from '../common/PosedContainer';
import Testimonials from './Testimionials';
import './HomePage.scss'

const HomePage = () => (
	<PosedContainer>
		<div>
			{/* // hero image */}
			<img className='hero-image' alt='hero' src={'https://c8.alamy.com/comp/T8KGM4/sportsman-building-arm-muscles-near-physical-therapy-T8KGM4.jpg'} />
			<Testimonials />
			{/* // videos */}
			{/* // information */}
		</div>
	</PosedContainer>
);

export default HomePage;