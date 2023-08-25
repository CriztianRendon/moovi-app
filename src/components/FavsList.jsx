//MODULES
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//COMPONENTS

//LIBS

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFilm, faStar } from '@fortawesome/free-solid-svg-icons';

const FavsList = () => {
	const { favsMovieList, addOrRemFromFavs } = useContext(MainContext);

	return (
		<main className='container'>
			{favsMovieList.length === 0 ? (
				<div className='container py-10 px-5 md:w-1/4'>
					<h2 className='text-center mb-3'>Nada por acá</h2>
					<Link to='/'>
						<button className='w-full text-white text-md font-semibold rounded-lg py-3 bg-gradient-to-br from-violet-900 to-blue-900 cursor-pointer'>
							Agregá algunas pelis
						</button>
					</Link>
				</div>
			) : (
				<div className='flex flex-col gap-5 croll-smooth touch-auto px-5 pt-5 pb-10'>
					{favsMovieList.map((movie, idx) => {
						return (
							<div
								key={idx}
								// className='grid grid-cols-1 ring-2 ring-slate-300 hover:ring-violet-500 rounded-b-lg'>
								className='relative h-48 w-full rounded-lg bg-blue-950 hover:ring-4 hover:ring-purple-500 card-animation shadow-md'>
								<Link to={`/details/${movie.id}`}>
									<figure>
										<img
											className='backdrop_path w-full h-48 object-cover rounded-lg'
											src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
											alt={movie.title}
										/>
										<div className='absolute bottom-0 h-2/3 w-full rounded-lg bg-gradient-to-t from-slate-900 to-transparent'></div>
									</figure>
								</Link>
								<button
									className='absolute text-xl p-2 -top-1 -right-1 bg-purple-500 rounded-full px-1 py-1 flex items-center'
									onClick={addOrRemFromFavs}
									data-movie-id={movie.id}>
									<FontAwesomeIcon
										className='text-white h-4 w-auto'
										icon={faHeart}
									/>
								</button>
								<div className='absolute bottom-0 flex flex-col gap-2 w-full py-3 px-3'>
									<div className='flex flex-row gap-5 justify-start'>
										<div className='flex items-center text-xs font-semibold bg-yellow-500 rounded-full px-2 py-1'>
											<FontAwesomeIcon
												className='text-white mr-1'
												icon={faStar}
											/>
											<span className='ranked'>{movie.ranked} </span>
										</div>
										<div className='flex items-center text-xs font-semibold'>
											<FontAwesomeIcon
												className='text-blue-500 mr-1'
												icon={faFilm}
											/>
											<span className='releaseDate'>{movie.releaseDate}</span>
										</div>
									</div>
									<h1 className='font-semibold text-md'>{movie.title}</h1>
									{/* <p className='text-xs'>{movie.overview.substring(0, 50)}...</p> */}
									{/* <div className='self-end'>
												<Link
													className='text-sm font-light hover:text-violet-300'
													to={`/details/${movie.id}`}>
													Más info ➡️
												</Link>
											</div> */}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</main>
	);
};

export default FavsList;
