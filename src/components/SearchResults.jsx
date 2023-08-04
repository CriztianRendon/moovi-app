//MODULES
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//COMPONENTS
import ListsUI from './ListsUI';
//LIBS
import axios from 'axios';
import { toast } from 'react-toastify';

const SearchResults = () => {
	const { keyword } = useParams();

	//SEARCH A MOVIE
	const navigate = useNavigate();
	const [movieSearchResults, setMovieSearchResults] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=06419c9c5f3e99fd614ed7eead050900&language=es-ES&sort_by=popularity.desc&include_adult=false&page=1&query=${keyword}`
			)
			.then((resp) => {
				setMovieSearchResults(resp.data.results);
				if (resp.data.results.length === 0) {
					toast.error(
						'No hay resultados para tu busqueda. Intenta con otra palabra',
						{
							position: toast.POSITION.BOTTOM_CENTER,
							autoClose: 5000,
						}
					);
					navigate(`/`, { replace: false });
				}
			})
			.catch((error) => {
				toast.error('Algo falló en la busqueda. Intenta de nuevo', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 3000,
				});
				navigate(`/`, { replace: false });
			});
	}, [keyword]);
	// END SEARCH A MOVIE

	return (
		<>
			{movieSearchResults.length !== 0 && (
				<>
					<h2 className='text-xl mb-5'>
						Acá tenes los resultados para <b>{keyword}</b>
					</h2>
					<ListsUI listForRender={movieSearchResults}></ListsUI>
				</>
			)}
		</>
	);
};

export default SearchResults;
