import React, { useEffect, useState } from 'react'
import AnalysisTemplate from './AnalysisTemplate';
import Navbar from './Navbar';
import { Circles } from 'react-loader-spinner';

const Analysis = () => {
	const [reports, setReports] = useState([])
	const [error, setError] = useState(null)
	const [loadings, setLoadings] = useState(true)
	
	useEffect(() => {
		setTimeout(() => {
			fetch('https://api.covid19api.com/summary')
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					// console.log(data.Countries)
					setReports(data.Countries);
					setLoadings(!true);
				})
				.catch((err) => {
					console.log(err);
					setError(err.message);
					setLoadings(!true);
				});
		}, []);
			
		}, 2000);
		

    return (
			<>
				<Navbar />
				<section className='bg-blue-100 pt-16'>
					<div>
						{loadings && (
							<div className='flex items-center justify-center mt-6 lg:mt-20'>
								<Circles
									height='50'
									width='50'
									color='blue'
									ariaLabel='circles-loading'
									wrapperStyle={{}}
									wrapperClass=''
									visible={true}
								/>
							</div>
						)}
					</div>
					<div className='max-w-7xl mx-auto'>
						{!loadings && <AnalysisTemplate reports={reports} />}
					</div>
				</section>
				<div>
					{error && (
						<div className='text-center md:text-2xl font-mono font-bold mt-3'>
							{error}
						</div>
					)}
				</div>
			</>
		);
}

export default Analysis
