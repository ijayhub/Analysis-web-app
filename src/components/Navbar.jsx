import React, { useState } from 'react'
import { TbReportAnalytics } from 'react-icons/tb';
import { BsFillHeartPulseFill } from 'react-icons/bs';
import { BiBookAdd } from 'react-icons/bi';
import { RiContactsBookFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';


const Navbar = () => { 
	const [openModal, setOpenModal] = useState(false)
    
    return (
			<div>
				<nav class='bg-white p-5  dark:bg-gray-900'>
					<div class='container flex flex-wrap items-center justify-around mx-auto  hover:text-yellow-500'>
						<a href='/' className='flex items-center'>
							<h1 className='self-center lg:text-3xl font-semibold whitespace-nowrap dark:text-white'>
								HealthCR 🧑🏽‍⚕️
							</h1>
						</a>
						<button
							data-collapse-toggle='navbar-default'
							type='button'
							class='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='navbar-default'
							aria-expanded='false'>
							<span class='sr-only'>Open main menu</span>
							<svg
								class='w-6 h-6'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clip-rule='evenodd'></path>
							</svg>
						</button>
						<div class='hidden w-full md:block md:w-auto' id='navbar-default'>
							<ul class='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
								<li>
									<a
										href='#HealthCondition '
										className='flex items-center justify-center text-white'
										aria-current='page'>
										Health Condition{' '}
										<span className='text-red-900 ml-2 lg:text-lg'>
											<BsFillHeartPulseFill />
										</span>
									</a>
								</li>
								<li>
									<a
										href='/analysis '
										className='flex items-center justify-center text-white'
										aria-current='page'>
										Analysis{' '}
										<span className='text-red-900 ml-2 lg:text-lg'>
											<TbReportAnalytics />
										</span>
									</a>
								</li>
								<li>
									<a
										href='#blogs'
										className='flex items-center justify-center text-white'
										aria-current='page'>
										Blogs{' '}
										<span className='text-red-900 ml-2 lg:text-lg'>
											<BiBookAdd />
										</span>
									</a>
								</li>
								<li>
									<a
										href='#'
										className='flex items-center justify-center text-white'
										onClick={() => setOpenModal(true)}
										aria-current='page'>
										Connect{' '}
										<span className='text-red-900 ml-2 lg:text-lg'>
											<RiContactsBookFill />
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div>{openModal && <Modal closeModal={setOpenModal} />}</div>
			</div>
		);
}

export default Navbar
