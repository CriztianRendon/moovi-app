//MODULES
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//COMPONENTS
import MovieCardSimple from '../components/MovieCardSimple';
//LIBS
import { MainContext } from '../context/MainContext';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	const { movieListNow, movieListTopRated, movieListUpcoming } =
		useContext(MainContext);

	return (
		<main className='pb-10'>
			<MovieCardSimple
				listForRender={movieListNow}
				listTitle={'Populares'}></MovieCardSimple>
			<MovieCardSimple
				listForRender={movieListTopRated}
				listTitle={'Top ranked'}></MovieCardSimple>
			<MovieCardSimple
				listForRender={movieListUpcoming}
				listTitle={'Próximos estrenos'}></MovieCardSimple>
		</main>
	);
};

export default Home;
