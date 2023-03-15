import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {data} from '../../data1';

const Blogs = () => {
	const [blogs] = useState(data);
	return (
		<div>
			<section className='mt-12 lg:mx-2 mx-2' id='blogs'>
				<div>
					<h2 className='py-4 lg:text-lg font-extrabold text-blue-900'>
						View blog posts
					</h2>
				</div>
				<hr />
				<div>
					<section className='grid grid-cols-1 md:grid-cols-2 mt-14 gap-4'>
						{blogs.map((blog) => (
							<div key={blog.id} className='lg:flex '>
								<img src={blog.img} alt={blog.title} className='lg:w-44 mr-4 rounded-lg' />
								<NavLink to={blog.link} target='_blank'>
									<h2 className='blog-title'>{blog.title}</h2>
								</NavLink>
							</div>
						))}
					</section>
				</div>
			</section>
		</div>
	);
};

export default Blogs;
