//MODULES
import { Routes, Route, Navigate } from 'react-router-dom';

//COMPONENTS
import Layout from './components/Layout';
import Login from './pages/Login';
import MovieDetails from './components/MovieDetails';
import FavsMovies from './pages/FavsMovies';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import SearchMovie from './pages/SearchMovie';

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
							path='/home'
							element={
								<RequireAuth>
									<Home />
								</RequireAuth>
							}
						/>
						<Route
							path='/list/:title'
							element={
								<RequireAuth>
									<MovieList />
								</RequireAuth>
							}
						/>
						<Route
							path='/favs-movies'
							element={
								<RequireAuth>
									<FavsMovies />
								</RequireAuth>
							}
						/>
						<Route
							path='/details/:id'
							element={
								<RequireAuth>
									<MovieDetails />
								</RequireAuth>
							}
						/>
						<Route
							path='/search-movie'
							element={
								<RequireAuth>
									<SearchMovie />
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
