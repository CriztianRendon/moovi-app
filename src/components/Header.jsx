//MODULES
import { Link } from 'react-router-dom';

//COMPONENTS
import Navbar from './Navbar';
import Buscador from './Buscador';

const Header = ({ login }) => {
	return (
		<header className='container flex flex-col gap-5'>
			<Link
				to={login ? '/listado' : '/'}
				className='mx-auto md:mr-auto text-2xl font-black cursor-pointer'>
				mO·Ovi
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
