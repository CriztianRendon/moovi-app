import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className='container'>
				<h1>Navbar component</h1>
				<nav>
					<ul>
						<li>
							<Link
								to='/login'>
								Login
							</Link>
						</li>
						<li>
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
