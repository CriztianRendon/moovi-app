//MODULES
import { useContext } from 'react';
//COMPONENTS
import MovieCardSimple from './MovieCardSimple';
//LIBS
import { MainContext } from '../context/MainContext';

const Listado = () => {
	const { movieListNow, movieListTopRated, movieListUpcoming } =
		useContext(MainContext);

	return (
		<main className='pb-10'>
			<div className='container mb-5'>
				<h2 className='text-white text-lg font-bold mb-5 pl-5'>Populares</h2>
				<MovieCardSimple listForRender={movieListNow}></MovieCardSimple>
			</div>
			<div className='container mb-5'>
				<h2 className='text-white text-lg font-bold mb-5 pl-5'>Top ranked</h2>
				<MovieCardSimple listForRender={movieListTopRated}></MovieCardSimple>
			</div>
			<div className='container mb-5'>
				<h2 className='text-white text-lg font-bold mb-5 pl-5'>Próximos estrenos</h2>
				<MovieCardSimple listForRender={movieListUpcoming}></MovieCardSimple>
			</div>
		</main>
	);
};

export default Listado;
