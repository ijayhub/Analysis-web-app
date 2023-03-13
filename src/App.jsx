import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Analysis from './components/Analysis';
import Home from './components/Home';

const App = () => {
  return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/analysis' element={<Analysis />} />
			
		</Routes>
	);
}

export default App
