import React from 'react';
import Navbar from './Navbar';
import cover from '../img/coverhealth.jpg';
import Analysis from './Analysis';
import Cards from './Cards';
import Blogs from './Blogs';
import HealthCondition from './HealthCondition';
import Footer from './Footer';

const Home = () => {
	return (
		<div>
			<Navbar />
			<img src={cover} alt={cover} style={{ width: '100%', height: '400px' }} />
			<div className='max-w-7xl mx-auto pt-16'>
				<Cards />
				<Blogs />
				<HealthCondition/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
