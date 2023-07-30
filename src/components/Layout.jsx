import { Outlet } from 'react-router-dom';
//COMPONENTS
import Navbar from './Navbar'
import Buscador from "./Buscador";
import Footer from "./Footer";
//LIBRARIES


const Layout = ({deleteToken}) => {
  return (
<>
  <Navbar deleteToken={deleteToken} />
  <Buscador />
  <Outlet />
  <Footer />
</>
  )
}

export default Layout
