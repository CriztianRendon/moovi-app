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
					<div className='container px-5 mb-5'>
						<div className='bg-slate-700 py-5 rounded-xl'>
							<p className='text-center text-xl'>
								Sin resultados para{' '}
								<span className='font-semibold'>"{keyword}"</span>
							</p>
						</div>
					</div>
				</>
			)}
			{movieSearchResults.length !== 0 ? (
				<div className='container pb-10'>
					<MovieCardDetails
						listForRender={movieSearchResults}
						listTitle={`Resultados para "${keyword}"`}></MovieCardDetails>
				</div>
			) : (
				<div className='container pb-10'>
					<MovieCardDetails
						listForRender={movieListNow}
						listTitle={'Explorá lo más popular'}></MovieCardDetails>
				</div>
			)}
		</main>
	);
};

export default SearchMovie;
