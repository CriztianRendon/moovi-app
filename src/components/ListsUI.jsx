//MODULES
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ListsUI = ({ listForRender }) => {
	const { addOrRemFromFavs } = useContext(MainContext);
	return (
		<div className='container'>
			{/* className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:space-y-0 justify-items-center md:px-0 mx-auto' */}
			<div className='relative flex flex-nowrap overflow-x-scroll hover:overflow-scroll items-start scroll-smooth touch-auto px-3'>
				{listForRender.map((movie, idx) => {
					return (
						<div
							key={idx}
							// className='grid grid-cols-1 ring-2 ring-slate-300 hover:ring-violet-500 rounded-b-lg'>
							className='relative flex-none w-2/5 md:w-1/3 lg:w-1/6 rounded-lg mr-2 p-2 card-animation'>
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
							{/* <div className='px-3'>
								<h1 className='font-semibold text-center text-xl my-3'>
									{movie.title}
								</h1>
								<div className='text-xs flex justify-between mb-3'>
									<span>🎬 {movie.release_date}</span>
									<span>⭐ {movie.vote_average.toFixed(1)} </span>
								</div>
								<p className='text-sm'>{movie.overview.substring(0, 150)}...</p>
							</div>
							<div className='p-3 self-end justify-self-end'>
								<Link
									className='text-sm font-light hover:text-violet-300'
									to={`/details/${movie.id}`}>
									Más info ➡️
								</Link>
							</div> */}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ListsUI;
