//MODULES
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//LIBS
import axios from 'axios';
import { toast } from 'react-toastify';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {

//LOGIN
const navigate = useNavigate()
const setTokenSessionId = ( tokenSessionId ) => {
	sessionStorage.setItem('tokenSessionId', tokenSessionId)
	console.log('Request token OK');
}

const getTokenSessionId = () => {
	const tokenSessionId = sessionStorage.getItem('tokenSessionId');
	return tokenSessionId
}

const deleteToken = () => {
	sessionStorage.removeItem('tokenSessionId');
	navigate('/');
};

//END LOGIN


	//SET MAIN MOVIE LISTS
	const [movieListNow, setMovieListNow] = useState([]);
	const [movieListTopRated, setMovieListTopRated] = useState([]);
	const [movieListUpcoming, setMovieListUpcoming] = useState([]);

	const optionsAxios = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjQxOWM5YzVmM2U5OWZkNjE0ZWQ3ZWVhZDA1MDkwMCIsInN1YiI6IjYzZGZjOWQ2Y2QyMDQ2MDA4MWUyNDc4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wrLtNTAw4akREV93JXsTfPgE1nQw4rxRVYfPd7-Pk8Q'
		}
	};

  useEffect(() => {
    // Realizar múltiples peticiones en paralelo usando Promise.all
    Promise.all([getMovieListNow(), getMovieListTopRated(), getMovieListUpcoming()])
      .then(([dataMovieListNow, dataMovieListTopRated, dataMovieListUpcoming]) => {
				setMovieListNow(dataMovieListNow);
				setMovieListTopRated(dataMovieListTopRated);
				setMovieListUpcoming(dataMovieListUpcoming);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

	const getMovieListNow = () => {
		return axios('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', optionsAxios)
		.then((resp) => resp.data.results
		)
		.catch((error) => {
			toast.error('Algo falló al cargar la lista de peliculas populares. ReloadIt!', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 1000,
			});
		});
	}

	const getMovieListTopRated = () => {
		return axios('https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1', optionsAxios)
		.then((resp) => resp.data.results
		)
		.catch((error) => {
			toast.error('Algo falló al cargar la lista de peliculas Top Rated. ReloadIt!', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 1000,
			});
		});
	}

	const getMovieListUpcoming = () => {
		return axios('https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1', optionsAxios)
		.then((resp) => resp.data.results
		)
		.catch((error) => {
			toast.error('Algo falló al cargar la lista de peliculas de estreno. ReloadIt!', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 1000,
			});
		});
	}
	//END SET MAIN MOVIE LISTS

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
				movieListNow,
				movieListTopRated,
				movieListUpcoming,
        favsMovieList,
        setFavsMovieList,
        addOrRemFromFavs,
				getTokenSessionId,
				setTokenSessionId,
				deleteToken
			}}>
			{children}
		</MainContext.Provider>
	);
};
