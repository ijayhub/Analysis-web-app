import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {data} from '../../data2'

const HealthCondition = () => {
    const [healths]=useState(data)
  return (
		<div className='mt-12' id='HealthCondition'>
			<div>
				<h2 className='p-4 lg:text-lg font-extrabold text-blue-900'>
					Health Conditions
				</h2>
			</div>
			<hr />
			<section className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-8 mx-4 lg:mx-0'>
				{healths.map((health) => (
					<div key={health.id}>
						<NavLink to={health.link} target='_blank'>
							<img
								src={health.img}
								alt={health.title}
								className='lg:h-44 lg:w-4/5 rounded-3xl shadow-lg'
							/>
						</NavLink>
						<h3 className='font-extrabold mt-4 text-blue-900'>
							{health.title}
						</h3>
					</div>
				))}
			</section>
		</div>
	);
}

export default HealthCondition
