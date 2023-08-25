//MODULES
import { Link } from 'react-router-dom';

//COMPONENTS
import Navbar from './Navbar';

const Header = ({ login }) => {
	return (
		<header className='fixed bottom-0 z-99 w-full py-3 px-5 flex flex-wrap items-center bg-gradient-to-t from-slate-900 to-transparent'>
			<Link
				to={login ? '/home' : '/'}
				className='font-Righteous text-4xl mx-auto text-white cursor-pointer'>
				mOOvi
			</Link>
			{login && (
				<>
					<Navbar />
				</>
			)}
		</header>
	);
};

export default Header;
