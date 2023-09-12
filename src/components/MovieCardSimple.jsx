//MODULES
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//COMPONENTS
import FavButton from '../components/FavButton';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const MovieCardSimple = ({ listForRender, listTitle }) => {
	const { favsMovieList } = useContext(MainContext);
	return (
		<div className='container mb-5'>
			<div className='flex items-baseline justify-between px-5 py-3'>
				<h2 className='text-lg font-bold'>{listTitle}</h2>
				<Link className='text-sm'>
					Ver todo <FontAwesomeIcon icon={faAngleRight} />
				</Link>
			</div>
			<div className='container overflow-x-hidden'>
				<div className='relative flex flex-nowrap overflow-x-scroll overflow-y-hidden items-start scroll-smooth touch-auto px-3'>
					{listForRender.map((movie) => {
						const isFav = favsMovieList.some(
							(favMovie) => favMovie.id == movie.id
						);
						return (
							<div
								key={movie.id}
								className='relative flex-none w-2/5 md:w-2/5 lg:w-1/6 rounded-lg mr-1 p-2 grow'>
								<FavButton
									className={'absolute text-xs p-1 top-1 right-1'}
									isFav={isFav}
									movieId={movie.id}
								/>
								{/* <button
								className='absolute text-xl p-1 top-1 right-1 bg-purple-500 rounded-full  flex items-center'
								onClick={addOrRemFromFavs}
								data-movie-id={movie.id}>
								<FontAwesomeIcon
									className='text-white h-3 w-auto'
									icon={faHeart}
								/>
							</button> */}
								<Link to={`/details/${movie.id}`}>
									<figure>
										<img
											id='poster_path'
											className='rounded-lg shadow-sm hover:ring-4 hover:ring-purple-500 -z-10'
											src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
											alt={movie.title}
										/>
									</figure>
								</Link>
								<h1
									id='movieTitle'
									className='hidden'>
									{movie.title}
								</h1>
								<span
									id='ranked'
									className=' hidden'>
									{movie.vote_average.toFixed(1)}
								</span>
								<span
									id='releaseDate'
									className=' hidden'>
									{movie.release_date.substring(0, 4)}
								</span>
								<img
									id='backdrop_path'
									className='hidden'
									src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
									alt={movie.title}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MovieCardSimple;
