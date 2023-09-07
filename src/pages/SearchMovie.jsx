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
		<main className='pt-28'>
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
				<div className='container py-5 pb-10'>
					<p className='text-center text-xl'>
						Resultados para <span className='font-semibold'>{keyword}</span>
					</p>

					<MovieCardDetails
						listForRender={movieSearchResults}></MovieCardDetails>
				</div>
			) : (
				<div className='container py-5 pb-10'>
					<p className='text-center text-xl font-semibold'>
						Explorá lo más popular
					</p>
					<MovieCardDetails listForRender={movieListNow}></MovieCardDetails>
				</div>
			)}
		</main>
	);
};

export default SearchMovie;
