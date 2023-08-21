//MODULES
import { Link } from 'react-router-dom';

//COMPONENTS
import Navbar from './Navbar';
import Buscador from './Buscador';

const Header = ({ login }) => {
	return (
		<header className='container p-5 mb-5 flex flex-wrap items-center gap-5' >
			<Link
				to={login ? '/listado' : '/'}
				className='font-Righteous text-4xl mr-auto md:mr-auto text-white cursor-pointer'>
				mOOvi
			</Link>
			{login && (
				<>
					<Navbar />
					<Buscador />
				</>
			)}
		</header>
	);
};

export default Header;
