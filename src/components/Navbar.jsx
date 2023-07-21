import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className='container'>
				<h1>Navbar component</h1>
				<nav className='mt-3' >
					<ul className='flex'>
						<li className='px-5 py-1 mx-5 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500 active:bg-violet-600  rounded-lg'>
							<Link 
								to='/'>
								Login
							</Link>
						</li>
						<li className='px-5 py-1 mx-5 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500 active:bg-violet-600  rounded-lg'>
							<Link
								to='/listado'>
								Listado
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
