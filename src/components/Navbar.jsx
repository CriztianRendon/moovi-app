//MODULES
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';

const Navbar = () => {
	const { favsMovieList, deleteToken } = useContext(MainContext);
	return (
		<>
			<nav>
				<ul className='flex justify-evenly'>
					<li className='px-5 py-1 mx-5 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500 active:bg-violet-600 rounded-lg cursor-pointer'>
						<Link to='/listado'>Listado</Link>
					</li>
					<li className='px-5 py-1 mx-5 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500 active:bg-violet-600 rounded-lg cursor-pointer'>
						<Link to='/favs-list'>💜 {favsMovieList.length}</Link>
					</li>
					<button
						className='px-5 py-1 mx-5 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500 active:bg-violet-600 rounded-lg'
						onClick={deleteToken}>
						Salir
					</button>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
