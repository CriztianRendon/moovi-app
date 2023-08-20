//MODULES
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
//CONTEXTS
import { MainContext } from '../context/MainContext';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';
//LIBRARIES
import { ToastContainer } from 'react-toastify';

const Layout = () => {
	const {getTokenSessionId} = useContext(MainContext)

	let login = getTokenSessionId();

	return (
		<>
			<Header login={login}/>
			<Outlet login={login}/>
			<ToastContainer />
			<Footer />
		</>
	);
};

export default Layout;
