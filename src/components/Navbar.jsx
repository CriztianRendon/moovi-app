//MODULES
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseCrack, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const { favsMovieList, deleteToken } = useContext(MainContext);
	return (
		<>
			<nav>
				<ul className='flex items-center justify-end gap-6'>
					<li>
						<Link
							className='text-white'
							to='/listado'>
							<FontAwesomeIcon
								className='h-6 w-auto'
								icon={faHouseCrack}
							/>
						</Link>
					</li>
					<li>
						<Link
							className='text-white text-md'
							to='/favs-list'>
							<FontAwesomeIcon
								className='text-white h-6 w-auto mr-1'
								icon={faHeart}
							/>
							{favsMovieList.length}
						</Link>
					</li>
					<button
						className='text-white text-md font-semibold rounded-lg py-2 px-5 bg-gradient-to-br from-violet-900 to-blue-900 cursor-pointer'
						onClick={deleteToken}>
						Salir
					</button>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
