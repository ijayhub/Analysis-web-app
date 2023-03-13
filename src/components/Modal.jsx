import React, { useState } from 'react'
import contactimg from '../img/contactimg.svg'

const Modal = ({ closeModal }) => {
 
  
  return (
		<div className='modal-background'>
			<div className='bg-white rounded-3xl p-8 '>
				<div className='flex justify-between items-center'>
					<h1 className='text-2xl font-extrabold text-blue-900 pb-4'>
						HealthCR 🧑🏽‍⚕️
					</h1>
					<button onClick={() => closeModal(false)}>x</button>
				</div>
				<div className='flex items-center justify-center place-content-center shadow-2xl '>
					<div className='px-5'>
						<form action='https://fabform.io/f/IfslbK2' method='post' >
							<input
								name="email"
								type='email'
								placeholder='Enter your email'
                className='outline-none'
               
							/>
							<br />
							<div className='flex items-center justify-center pt-4'>
								<button
									type='submit'
									className='bg-blue-900 text-white p-2 rounded-lg'>
									Subscribe
								</button>
							</div>
						</form>
					</div>

					<div className='bg-blue-100 ml-4 p-2 rounded-lg '>
						<img src={contactimg} alt={contactimg} className='w-54 h-32' />
						<h3 className='text-center'>
							Welecome sucbribe to our newletter
						</h3>{' '}
						<br />
						<p className='text-center'>OR</p>
						<p>Get in touch with any of our social media</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal

