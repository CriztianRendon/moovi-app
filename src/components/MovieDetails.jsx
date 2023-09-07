//MODULES
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//COMPONENTS
import FavButton from '../components/FavButton';
//LIBS
import axios from 'axios';
import { toast } from 'react-toastify';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';

const MovieDetails = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState([]);
	const [genres, setGenres] = useState([]);
	const { favsMovieList } = useContext(MainContext);

	const isFav = favsMovieList.some((favMovie) => favMovie.id == id);
	console.log(isFav);

	useEffect(() => {
		const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=06419c9c5f3e99fd614ed7eead050900&language=es-ES`;
		axios
			.get(endPoint)
			.then((resp) => {
				setMovieDetails(resp.data);
				setGenres(resp.data.genres);
				console.log(id);
			})
			.catch((error) => {
				toast.error('Algo falló al cargar los detalles. ReloadIt!', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 3000,
				});
			});
	}, []);

	// console.log(movieDetails);

	return (
		<>
			{movieDetails && (
				<main className='relative w-full pb-20'>
						<FavButton
						className={'absolute z-10 text-md p-2 top-5 right-5 '}
							isFav={isFav}
							movieId={movieDetails.id}
						/>
					<div className='relative'>
						<img
							id='poster_path'
							className='aspect-auto object-cover'
							src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
							alt={movieDetails.title}
						/>
						<img
							id='backdrop_path'
							className='hidden'
							src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
							alt={movieDetails.title}
						/>
						<div className='absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-blue-950 to-transparent'></div>
					</div>
					<div className='relative -mt-10 px-5'>
						<div className='flex flex-row gap-5 justify-center mb-3'>
							<div className='flex items-center text-sm font-semibold bg-yellow-500 rounded-full px-2 py-1'>
								<FontAwesomeIcon
									className='text-white mr-1'
									icon={faStar}
								/>
								<span
									id='ranked'
									className='ranked'>
									{movieDetails.vote_average}{' '}
								</span>
							</div>
							<div className='flex items-center text-sm font-semibold'>
								<span
									id='releaseDate'
									className='releaseDate'>
									{movieDetails.release_date}
								</span>
							</div>
						</div>
						<h1
							id='movieTitle'
							className='text-center font-semibold text-3xl mb-5'>
							{movieDetails.title}
						</h1>
						<ul className='flex flex-row justify-center gap-2 mb-5'>
							{genres.map((genre) => (
								<li
									className='text-xs font-semibold bg-blue-900 py-1 px-2 rounded-lg'
									key={genre.id}>
									{genre.name}
								</li>
							))}
						</ul>
						<p className='text-sm'>{movieDetails.overview}</p>
					</div>
				</main>
			)}
		</>
	);
};

export default MovieDetails;
