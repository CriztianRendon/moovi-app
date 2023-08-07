//MODULES
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
//COMPONENTS
import ListsUI from './ListsUI';
//LIBS
import { MainContext } from '../context/MainContext';

const Listado = () => {
	const { movieListNow, movieListTopRated, movieListUpcoming } = useContext(MainContext);

	let token = sessionStorage.getItem('token');

	return (
		<>
			{!token && (
				<Navigate
					to='/'
					replace={true}
				/>
			)}
			<h2 className='text-center font-bold'>Popular</h2>
			<ListsUI listForRender={movieListNow}></ListsUI>
			<hr />
			<h2 className='text-center font-bold'>Top ranked</h2>
			<ListsUI listForRender={movieListTopRated}></ListsUI>
			<hr />
			<h2 className='text-center font-bold'>Upcomig</h2>
			<ListsUI listForRender={movieListUpcoming}></ListsUI>
			
		</>
	);
};

export default Listado;
