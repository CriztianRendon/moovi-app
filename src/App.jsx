//MODULES
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

//COMPONENTS
import Layout from './components/Layout';
import Login from './components/Login';
import Listado from './components/Listado';
import Details from './components/Details';
import SearchResults from './components/SearchResults';
import FavsList from './components/FavsList';
import RequireAuth from './components/RequireAuth';

//CONTEXTS
import { MainProvider } from './context/MainContext';

function App() {
	return (
		<>
			<MainProvider>
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
								element={
									<RequireAuth>
										<Listado />
									</RequireAuth>
								}
							/>
							<Route
								path='favs-list'
								element={
									<RequireAuth>
										<FavsList />
									</RequireAuth>
								}
							/>
							<Route
								path='details/:id'
								element={
									<RequireAuth>
										<Details />
									</RequireAuth>
								}
							/>
							<Route
								path='search-results/:keyword'
								element={
									<RequireAuth>
										<SearchResults />
									</RequireAuth>
								}
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
