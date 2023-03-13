import React from 'react'

const Cards = () => {
    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-2'>
                <a href='#'>
                    <div className='coro'>
                        <div
                            className='max-w-sm mx-auto
                                bg-white text-blue-900 rounded-lg shadow'>
                            <a href='/analysis'>
                                <h5
                                    className='mb-2  p-6 text-2xl font-bold 
                                    tracking-tight'>
                                    COVID-19 ANALYSIS
                                </h5>
                            </a>
                        </div>
                    </div>
                </a>
                <a href='#'>
                    <div className='sleep'>
                        <div
                            className='max-w-lg mx-auto
                                hover:bg-red-900 mb-6 hover:text-white bg-white text-red-900 rounded-lg shadow'>
                            <a
                                href='https://tealfeed.com/power-rest-why-taking-breaks-key-if53r'
                                target='_blank'>
                                <h5
                                    className='mb-2 p-6 text-2xl font-bold 
                                    tracking-tight text-red'>
                                    A Good Night Sleep or Rest can improve your performance
                                </h5>
                            </a>
                        </div>
                    </div>
                </a>
            </section>
		</div>
	);
}

export default Cards
