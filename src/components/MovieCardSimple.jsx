//MODULES
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MovieCardSimple = ({ listForRender }) => {
	const { addOrRemFromFavs } = useContext(MainContext);
	return (
		<div className='container overflow-x-hidden'>
			<div className='relative flex flex-nowrap overflow-x-scroll overflow-y-hidden items-start scroll-smooth touch-auto px-3'>
				{listForRender.map((movie, idx) => {
					return (
						<div
							key={idx}
							className='relative flex-none w-2/5 md:w-2/5 lg:w-1/6 rounded-lg mr-1 p-2 grow'>
							<button
								className='absolute text-xl p-2 top-1 right-1 bg-purple-500 rounded-full px-1 py-1 flex items-center'
								onClick={addOrRemFromFavs}
								data-movie-id={movie.id}>
								<FontAwesomeIcon
									className='text-white h-4 w-auto'
									icon={faHeart}
								/>
							</button>
							<Link to={`/details/${movie.id}`}>
								<figure>
									<img
										className='rounded-lg shadow-md hover:ring-4 hover:ring-purple-500 -z-10'
										src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
										alt={movie.title}
									/>
								</figure>
							</Link>
							<h1 className='hidden'>{movie.title}</h1>
							<span
								className='ranked hidden'
								id='ranked'>
								{movie.vote_average.toFixed(1)}
							</span>
							<span
								className='releaseDate hidden'
								id='releaseDate'>
								{movie.release_date.substring(0, 4)}
							</span>
							<img
								className='backdrop_path hidden'
								src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
								alt={movie.title}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MovieCardSimple;
