//MODULES
import { Outlet } from 'react-router-dom';
//CONTEXTS
//COMPONENTS
import Navbar from './Navbar';
import Buscador from './Buscador';
import Footer from './Footer';
//LIBRARIES
import { ToastContainer } from 'react-toastify';

const Layout = ({ deleteToken}) => {
	return (
		<>
			<Navbar
				deleteToken={deleteToken}
			/>
			<Buscador />
			<Outlet />
			<ToastContainer />
			<Footer />
		</>
	);
};

export default Layout;
