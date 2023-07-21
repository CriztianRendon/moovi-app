//MODULES
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//COMPONENTS
import Layout from './components/Layout';
import Login from './components/Login'
import Listado from "./components/Listado";

//LIBS


function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						path='/'
						element={<Login />}
					/>
					<Route
						path='listado'
						element={<Listado />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
