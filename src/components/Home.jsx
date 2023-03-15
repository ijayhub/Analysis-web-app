import React from 'react';
import Navbar from './Navbar';
import cover from '/img/coverhealth.jpg';
import Analysis from './Analysis';
import Cards from './Cards';
import Blogs from './Blogs';
import HealthCondition from './HealthCondition';
import Footer from './Footer';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const Home = () => {
	return (
		<div>
			<Navbar />
			<img src={cover} alt={cover} style={{ width: '100%', height: '400px' }} />
			<div className='max-w-7xl mx-auto pt-16'>
				<Cards />
				<Blogs />
				<HealthCondition />
			</div>
			<a href='#'>
				<div className='flex justify-end items-end mr-8'>
					<BsFillArrowUpSquareFill className='text-blue-900 text-2xl lg:text-3xl' />
				</div>
			</a>
			<Footer />
		</div>
	);
};

export default Home;
