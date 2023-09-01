//MODULES
import { useContext, useEffect } from 'react';
//CONTEXT
import { MainContext } from '../context/MainContext';
//COMPONENTS
import Buscador from '../components/Buscador';
import MovieCardDetails from '../components/MovieCardDetails';

const SearchMovie = () => {
	const {
		movieSearchResults,
		keyword,
		setKeyword,
		noResultsForSearch,
		movieListNow,
	} = useContext(MainContext);
	console.log(movieSearchResults);

	useEffect(() => {
		return () => {
			setKeyword('');
		};
	}, []);

	return (
		<>
			<Buscador />
			{noResultsForSearch && (
				<>
					<div className='container px-5 pb-5'>
						<p className='text-center text-xl'>
							Sin resultados para{' '}
							<span className='font-semibold'>{keyword}</span>
						</p>
					</div>
					<hr className='m-auto w-1/2'/>
				</>
			)}
			{movieSearchResults.length !== 0 ? (
				<main className='container py-5 pb-10'>
					<p className='text-center text-xl'>
						Resultados para <span className='font-semibold'>{keyword}</span>
					</p>

					<MovieCardDetails
						listForRender={movieSearchResults}></MovieCardDetails>
				</main>
			) : (
				<main className='container py-5 pb-10'>
					<p className='text-center text-xl font-semibold'>
						Explorá lo más popular
					</p>
					<MovieCardDetails listForRender={movieListNow}></MovieCardDetails>
				</main>
			)}
		</>
	);
};

export default SearchMovie;
