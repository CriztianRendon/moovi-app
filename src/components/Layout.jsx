import { Outlet } from 'react-router-dom';
//COMPONENTS
import Navbar from './Navbar'
import Buscador from "./Buscador";
//LIBRARIES


const Layout = () => {
  return (
<>
  <Navbar />
  <Buscador />
  <Outlet />
</>
  )
}

export default Layout
