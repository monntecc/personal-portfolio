import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Header } from './components/Header/Header';
import { Overview } from './pages/Overview/Overview';
import { Skills } from './pages/Skills/Skills';

import CopyrightIcon from '@mui/icons-material/Copyright';

export default function App() {
	return (
		<>
			<div className='container'>
				<Header />
				<div id='copyright'>
					<div>
						<CopyrightIcon />
					</div>
					<div>
						2022 Copyright{' '}
						<a href='https://github.com/nylestroke/' target='_blank'>
							nylestroke
						</a>
						.
					</div>
				</div>
				<Routes>
					<Route path='/' element={<Main />}></Route>
					<Route path='/overview' element={<Overview />}></Route>
					<Route path='/skills' element={<Skills />}></Route>
				</Routes>
			</div>
		</>
	);
}
