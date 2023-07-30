//MODULES
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
//LIBS
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const SearchResults = ({ addOrRemFronFavs }) => {
	const navigate = useNavigate();
	const { keyword } = useParams();

	const [movieResults, setMovieResults] = useState([]);

	useEffect(() => {
		console.log(keyword);
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=06419c9c5f3e99fd614ed7eead050900&language=es-ES&sort_by=popularity.desc&include_adult=false&page=1&query=${keyword}`
			)
			.then((resp) => {
				setMovieResults(resp.data.results);
				console.log(resp.data.results);
			})
			.catch((error) => {
				toast.error('Algo falló en la busqueda. Intenta de nuevo', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 3000,
				});
				navigate(`/`, { replace: false });
			});
	}, [keyword]);

	return (
		<>
			{movieResults - length === 0 ? (
				<h2 className='text-xl mb-5'>
					No hay resultados para <b>{keyword}</b>
				</h2>
			) : (
				<>
					<h2 className='text-xl mb-5'>
						Acá tenes los resultados para <b>{keyword}</b>
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:space-y-0 justify-items-center md:px-0 mx-auto'>
						{movieResults.map((movie, idx) => {
							return (
								<div
									key={idx}
									className='grid grid-cols-1 ring-2 ring-slate-300 hover:ring-violet-500 rounded-b-lg'>
									<button
										className='absolute text-xl p-2 justify-self-end'
										onClick={addOrRemFronFavs}
										data-movie-id={movie.id}>
										💜
									</button>
									<img
										src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
										alt={movie.title}
									/>
									<div className='px-3'>
										<h1 className='font-kanit text-center text-xl my-3'>
											{movie.title}
										</h1>
										<div className='text-xs flex justify-between mb-3'>
											<span>🎬 {movie.release_date}</span>
											<span>⭐ {movie.vote_average.toFixed(1)} </span>
										</div>
										<p className='text-sm'>
											{movie.overview.substring(0, 150)}...
										</p>
									</div>
									<div className='p-3 self-end justify-self-end'>
										<Link
											className='text-sm font-light hover:text-violet-300'
											to={`/detalle?movieId=${movie.id}`}>
											Más info ➡️
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</>
	);
};

export default SearchResults;
