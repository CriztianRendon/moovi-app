//MODULES
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//COMPONENTS

//LIBS

const FavsList = () => {
	const { favsMovieList, addOrRemFromFavs } = useContext(MainContext);

	return (
		<div className='container'>
			{favsMovieList.length === 0 ? (
				<h2>No tenes favoritos</h2>
			) : (
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:space-y-0 justify-items-center md:px-0 mx-auto'>
					{favsMovieList.map((movie, idx) => {
						return (
							<div
								key={idx}
								className='grid grid-cols-1 ring-2 ring-slate-300 hover:ring-violet-500 rounded-b-lg'>
								<button
									className='absolute text-xl p-2 justify-self-end'
									onClick={addOrRemFromFavs}
									data-movie-id={movie.id}>
									💜
								</button>
								<figure>
									<img
										src={movie.imgURL}
										alt={movie.title}
									/>
								</figure>
								<div className='px-3'>
									<h1 className='font-semibold text-center text-xl my-3'>
										{movie.title}
									</h1>
									{/* <div className='text-xs flex justify-between mb-3'>
									<span>🎬 {movie.release_date}</span>
									<span>⭐ {movie.vote_average.toFixed(1)} </span>
								</div> */}
									{/* <p className='text-sm'>
									{movie.overview.substring(0, 150)}...
								</p> */}
								</div>
								<div className='p-3 self-end justify-self-end'>
									<Link
										className='text-sm font-light hover:text-violet-300'
										to={`/details/${movie.id}`}>
										Más info ➡️
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default FavsList;
