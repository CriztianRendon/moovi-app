//MODULES
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
//COMPONENTS
import ListsUI from './ListsUI';
//LIBS
import { MainContext } from '../context/MainContext';

const Listado = () => {
	const { movieListNow, movieListTopRated, movieListUpcoming } =
		useContext(MainContext);

	return (
		<div className='pb-10'>
			<div className='container mb-5'>
				<h2 className='text-white text-lg font-bold mb-5 pl-5'>Populares</h2>
				<ListsUI listForRender={movieListNow}></ListsUI>
			</div>
			<div className='container mb-5'>
				<h2 className='text-white text-lg font-bold mb-5 pl-5'>Top ranked</h2>
				<ListsUI listForRender={movieListTopRated}></ListsUI>
			</div>
			<div className='container mb-5'>
				<h2 className='text-white text-lg font-bold mb-5 pl-5'>Próximos estrenos</h2>
				<ListsUI listForRender={movieListUpcoming}></ListsUI>
			</div>
		</div>
	);
};

export default Listado;
