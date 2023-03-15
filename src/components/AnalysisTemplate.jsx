import React from 'react'

const AnalysisTemplate = ({reports}) => {
  return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3 lg:mx-0'>
			{reports.map((report) => (
				<div key={report.ID} className='bg-white rounded-lg shadow-2xl'>
					<div className='flex flex-col justify-center items-center mt-2'>
						<h2 className='font-extrabold lg:text-2xl tracking-wider'>
							{report.Country}
						</h2>
						<p className='mt-1 text-green-600 font-bold'>
							{report.CountryCode}
						</p>
					</div>
					<div>
						<div className='flex justify-between items-center py-3 px-5 text-blue-700 font-bold'>
							Newly confirmed cases: <p>{report.NewConfirmed}</p>
						</div>
						<div className='flex justify-between items-center py-3 px-5 text-red-600 font-bold'>
							Total confirmed cases: <p>{report.TotalConfirmed}</p>
						</div>
						<div className=' flex justify-between items-center py-3 px-5 text-purple-700 font-bold'>
							Previous Death Rate was: <p>{report.TotalDeaths}</p>
						</div>
						<div className='flex justify-between items-center py-3 px-5 text-blue-700 font-bold'>
							No new death: <p>{report.NewDeaths} reported</p>
						</div>
						<div className=' flex justify-between items-center py-3 px-5 text-purple-700 font-bold'>
							As at: <p>{report.Date}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default AnalysisTemplate
