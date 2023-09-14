//MODULES
import { Link } from 'react-router-dom';

//COMPONENTS
import Navbar from './Navbar';

const Header = ( {login}) => {
	return (
		<>
			{login && (
				<header className='fixed bottom-0 h-16 z-99 w-full px-5 flex flex-wrap items-center bg-slate-950 md:top-0 md:px-28'>
					<Link
						to={'/home'}
						className='font-Righteous text-4xl mr-auto text-white cursor-pointer md:mr-auto'>
						mOOvi
					</Link>
					<Navbar />
				</header>
			)}
		</>
	);
};

export default Header;
