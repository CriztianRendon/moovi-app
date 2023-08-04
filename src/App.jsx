//MODULES
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

//COMPONENTS
import Layout from './components/Layout';
import Login from './components/Login';
import Listado from './components/Listado';
import Details from './components/Details';
import SearchResults from './components/SearchResults';
import FavsList from './components/FavsList';

//CONTEXTS
import { MainProvider } from './context/MainContext';

function App() {
	const navigate = useNavigate();

	const deleteToken = () => {
		sessionStorage.removeItem('token');
		navigate('/');
	};

	return (
		<>
			<MainProvider>
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
							path='favs-list'
							element={<FavsList />}
						/>
						<Route
							path='details/:id'
							element={<Details />}
						/>
						<Route
							path='search-results/:keyword'
							element={<SearchResults />}
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
					</Route>
				</Routes>
			</MainProvider>
		</>
	);
}

export default App;
