//MODULES
import { useContext, useEffect } from 'react';
//CONTEXT
import { MainContext } from '../context/MainContext';
//COMPONENTS
import Buscador from '../components/Buscador';
import MovieCardDetails from '../components/MovieCardDetails';

const SearchMovie = () => {
	const { movieSearchResults, setKeyword } = useContext(MainContext);
	console.log(movieSearchResults);

	useEffect(() => {
		return () => {
			setKeyword('');
		};
	}, []);

	return (
		<>
			<Buscador />
			{movieSearchResults.length !== 0 ? (
				<main className='container mt-40'>
					<h2 className='ml-5 text-md'>Resultados</h2>
					<MovieCardDetails
						listForRender={movieSearchResults}></MovieCardDetails>
				</main>
			) : (
				<h1>Añadir componente con listados por categorias</h1>
			)}
		</>
	);
};

export default SearchMovie;
