import React from 'react'

const Cards = () => {
    return (
			<div>
				<section className='grid grid-cols-1 md:grid-cols-2 mx-2 gap-8'>
					<div className='coro'>
						<div
							className=' lg:w-7/12 mx-5
                            bg-white text-blue-900 rounded-lg shadow'>
							<a href='/analysis'>
								<h5
									className='mb-2  p-6 lg:text-2xl font-bold 
                                tracking-tight text-center'>
									COVID-19 ANALYSIS
								</h5>
							</a>
						</div>
					</div>
					<div className='sleep'>
						<div
							className=' lg:w-7/12 mx-5 mb-2
                            hover:bg-red-900 hover:text-white bg-white lg:mx-0  text-red-900 rounded-lg shadow'>
							<a
								href='https://tealfeed.com/power-rest-why-taking-breaks-key-if53r'
								target='_blank'>
								<h5
									className='mb-2 p-6 lg:text-2xl font-bold 
                                tracking-tight text-red text-center'>
									A Good Night Sleep or Rest can improve your performance
								</h5>
							</a>
						</div>
					</div>
				</section>
			</div>
		);
}

export default Cards
