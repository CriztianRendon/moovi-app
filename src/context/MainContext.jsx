//MODULES
import { createContext, useState, useEffect } from 'react';

//LIBS
import axios from 'axios';
import { toast } from 'react-toastify';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
	//SET MOVIE LIST
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/discover/movie?api_key=06419c9c5f3e99fd614ed7eead050900&language=es-ES&sort_by=popularity.desc&page=1'
			)
			.then((resp) => {
				const apiData = resp.data.results;
				setMovieList(apiData);
			})
			.catch((error) => {
				toast.error('Algo falló al cargar la lista de peliculas. ReloadIt!', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 1500,
				});
			});
	}, []);
	//END SET MAIN MOVIE LIST

	//SET FAVS MOVIE LIST
	const [favsMovieList, setFavsMovieList] = useState([]);
	const itemFavsMovieList = localStorage.getItem('itemFavsMovieList');

	useEffect(() => {
		if (itemFavsMovieList !== null) {
			setFavsMovieList(JSON.parse(itemFavsMovieList));
		}
	}, [itemFavsMovieList]);
	//END SET FAVS MOVIE LIST

	//ADD OR REMOVE A MOVIE OF FAVS MOVIE LIST
  //CREATE LIST OF FAVS MOVIES IN LOCAL STORAGE
	const addOrRemFromFavs = (e) => {
		const itemFavsMovieList = localStorage.getItem('itemFavsMovieList');
		let favsMovieList;

		if (itemFavsMovieList !== null) {
			favsMovieList = JSON.parse(itemFavsMovieList);
		} else {
			favsMovieList = [];
		}

		//GET VALUES OF THE SELECTED MOVIE AND CREATE A LITERAL OBJECT
    const getCardMovie = e.currentTarget.parentElement;
		const infoMovie = {
			id: e.currentTarget.dataset.movieId,
			title: getCardMovie.querySelector('h1').innerText,
			imgURL: getCardMovie.querySelector('img').getAttribute('src'),
		};

    //ADD A MOVIE TO THE LIST
		if (!favsMovieList.find((movie) => movie.id === infoMovie.id)) {
			favsMovieList.push(infoMovie);
			localStorage.setItem('itemFavsMovieList', JSON.stringify(favsMovieList));
			setFavsMovieList(favsMovieList);
			toast('Peli agregada', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 500,
			});
    //REMOVE A MOVIE FROM THE LIST
		} else {
			localStorage.setItem(
				'itemFavsMovieList',
				JSON.stringify(
					favsMovieList.filter((movie) => movie.id !== infoMovie.id)
				)
			);
			setFavsMovieList(favsMovieList);
			toast('Peli borrada', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 500,
			});
		}
	};
	//END ADD OR REMOVE A MOVIE OF FAVS MOVIE LIST

	return (
		<MainContext.Provider
			value={{
				movieList,
				setMovieList,
        favsMovieList,
        setFavsMovieList,
        addOrRemFromFavs
			}}>
			{children}
		</MainContext.Provider>
	);
};
