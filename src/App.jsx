//MODULES
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

//COMPONENTS
import Layout from './components/Layout';
import Login from './components/Login';
import Listado from './components/Listado';
import Details from './components/Details';
import SearchResults from './components/SearchResults';
import FavsList from './components/FavsList';

//LIBS

function App() {
	const navigate = useNavigate();

	const [listMovieFavs, setListMovieFavs] = useState([]);
	const itemListMovieFavs = localStorage.getItem('itemListMovieFavs');

	useEffect(() => {
		if (itemListMovieFavs !== null) {
			setListMovieFavs(JSON.parse(itemListMovieFavs));
			// console.log('Se modifico la lista favs');
		}
	}, [itemListMovieFavs]);

	const addOrRemFronFavs = (e) => {
		const itemListMovieFavs = localStorage.getItem('itemListMovieFavs');
		let listMovieFavs;

		if (itemListMovieFavs !== null) {
			listMovieFavs = JSON.parse(itemListMovieFavs);
		} else {
			listMovieFavs = [];
		}

		const getCardMovie = e.currentTarget.parentElement;
		const infoMovie = {
			id: e.currentTarget.dataset.movieId,
			title: getCardMovie.querySelector('h1').innerText,
			imgURL: getCardMovie.querySelector('img').getAttribute('src'),
		};

		if (!listMovieFavs.find((movie) => movie.id === infoMovie.id)) {
			listMovieFavs.push(infoMovie);
			localStorage.setItem('itemListMovieFavs', JSON.stringify(listMovieFavs));
			setListMovieFavs(listMovieFavs);
			console.log('Agregada a favs');
		} else {
			localStorage.setItem(
				'itemListMovieFavs',
				JSON.stringify(
					listMovieFavs.filter((movie) => movie.id !== infoMovie.id)
				)
			);
			setListMovieFavs(listMovieFavs);
			console.log('Borrada de favs');
		}

		console.log(localStorage.getItem('itemListMovieFavs'));
	};

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
						element={<Listado addOrRemFronFavs={addOrRemFronFavs}/>}
					/>
					<Route
						path='favs-list'
						element={<FavsList addOrRemFronFavs={addOrRemFronFavs} listMovieFavs={listMovieFavs}/>}
					/>
					<Route
						path='details/:id'
						element={<Details />}
					/>
						<Route
							path='search-results/:keyword'
							element={<SearchResults addOrRemFronFavs={addOrRemFronFavs}/>}
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
		</>
	);
}

export default App;
