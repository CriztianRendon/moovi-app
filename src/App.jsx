//MODULES

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

//COMPONENTS
import Layout from './components/Layout';
import Login from './components/Login';
import Listado from './components/Listado';
import Details from './components/Details';
import SearchResults from './components/SearchResults';

//LIBS

function App() {
	const navigate = useNavigate();

	const deleteToken = () => {
		sessionStorage.removeItem('token');
		navigate('/');
	};

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Layout deleteToken={deleteToken} />}>
					<Route
						path='/'
						element={<Login />}
					/>
					<Route
						path='listado'
						element={<Listado />}
					/>
					<Route
						path='details/:id'
						element={<Details />}
					/>
					<Route
						path='*'
						element={
							<Navigate
								to='/'
								replace
							/>
						}
					/>
					<Route
						path='search-results/:keyword'
						element={<SearchResults />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
