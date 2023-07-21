import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//COMPONENTS
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './components/Login'
import Listado from "./components/Listado";

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						index
						path='/'
						element={<Home />}
					/>
					<Route
						path='login'
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
