//MODULES
import { Link } from 'react-router-dom';

//COMPONENTS
import Navbar from './Navbar';

const Header = ({ login }) => {
	return (
		<>
			{login && (
				<header className='fixed bottom-0 z-99 w-full py-3 px-5 flex flex-wrap items-center bg-blue-950'>
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
			)}
		</>
	);
};

export default Header;
