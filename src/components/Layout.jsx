import { Outlet } from 'react-router-dom';
//COMPONENTS
import Navbar from './Navbar'
import Buscador from "./Buscador";
import Footer from "./Footer";
//LIBRARIES


const Layout = ({deleteToken, listMovieFavs}) => {
  return (
<>
  <Navbar deleteToken={deleteToken} listMovieFavs={listMovieFavs}/>
  <Buscador />
  <Outlet value={{
    developer:'Cristian',
    app: 'moovi'}} />
  <Footer />
</>
  )
}

export default Layout
