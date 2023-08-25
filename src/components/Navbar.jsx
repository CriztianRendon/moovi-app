//MODULES
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faBookmark,
	faBars,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const { favsMovieList, deleteToken } = useContext(MainContext);
	return (
		<>
			<nav>
				<ul className='flex gap-6 items-center'>
					<li>
						<Link
							className='text-white'
							to='/home'>
							<FontAwesomeIcon
								className='h-5 w-auto'
								icon={faHouse}
							/>
						</Link>
					</li>
					<li>
						<Link
							className='text-white '
							to='/favs-movies'>
							<FontAwesomeIcon
								className='text-white h-5 w-auto mr-1'
								icon={faBookmark}
							/>
							{favsMovieList.length}
						</Link>
					</li>
					<li>
						<Link className='text-white' to='/search-movie'>
							<FontAwesomeIcon
								className='h-5 w-auto '
								icon={faMagnifyingGlass}
							/>
						</Link>
					</li>
					<button
						className='text-white text-md font-semibold rounded-full px-2 py-1 bg-gradient-to-br from-violet-900 to-blue-900 cursor-pointer'
						onClick={deleteToken}>
						<FontAwesomeIcon className='w-4' icon={faBars} />
					</button>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
