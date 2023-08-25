//MODULES
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';

//COMPONENTS
import Header from './Header';
import Buscador from './Buscador';
//LIBRARIES
import { ToastContainer } from 'react-toastify';

const Layout = () => {
	const {getTokenSessionId} = useContext(MainContext)

	let login = getTokenSessionId();

	return (
		<>
			<Outlet />
			<Header login={login}/>
			<ToastContainer />
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
