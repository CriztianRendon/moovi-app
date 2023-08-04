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
			<ListsUI listForRender={movieListNow}></ListsUI>
			<hr />
			<ListsUI listForRender={movieListTopRated}></ListsUI>
			<hr />
			<ListsUI listForRender={movieListUpcoming}></ListsUI>
			
		</>
	);
};

export default Listado;
