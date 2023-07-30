import { Link } from 'react-router-dom';

const Navbar = ({ deleteToken }) => {
	return (
		<>
			<header className='container'>
				<nav className='flex my-3'>
					<Link
						to='/'
						className='mr-auto text-2xl font-black cursor-pointer'>
						mO·Ovi
					</Link>
					<ul className='flex justify-evenly'>
						<li className='px-5 py-1 mx-5 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500 active:bg-violet-600 rounded-lg cursor-pointer'>
							<Link to='/listado'>Listado</Link>
						</li>
						<li className='px-5 py-1 mx-5 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500 active:bg-violet-600 rounded-lg cursor-pointer'>
							<Link to='/listado'>💜 0</Link>
						</li>
						<button
							className='px-5 py-1 mx-5 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500 active:bg-violet-600 rounded-lg'
							onClick={deleteToken}>
							Salir
						</button>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
