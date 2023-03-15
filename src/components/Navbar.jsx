import React, { useState } from 'react'
import { TbReportAnalytics } from 'react-icons/tb';
import { BsFillHeartPulseFill } from 'react-icons/bs';
import { BiBookAdd } from 'react-icons/bi';
import { RiContactsBookFill } from 'react-icons/ri';
import Modal from './Modal';


const Navbar = () => { 
	const [openModal, setOpenModal] = useState(false)
    
    return (
		<div>
			<nav className='bg-white p-5 dark:bg-gray-900'>
				<div className='nav-container'>
					<a href='/' className='flex items-center'>
						<h1 className='nav-heading'>
							HealthCR 🧑🏽‍⚕️
						</h1>
					</a>
					<button
						data-collapse-toggle='navbar-default'
						type='button'
						className='nav-open'
						aria-controls='navbar-default'
						aria-expanded='false'>
						<span class='sr-only'>Open main menu</span>
						<svg
							className='w-6 h-6'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'></path>
						</svg>
					</button>
					<div className='hidden w-full md:block md:w-auto' id='navbar-default'>
						<ul className='nav-listContainer'>
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
