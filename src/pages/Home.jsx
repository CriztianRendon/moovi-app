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
			<div className='fixed top-0 z-10 bg-slate-900 shadow-md w-full p-5 md:top-16'>
				<h1 className='font-semibold text-center text-xl'>Explorá</h1>
			</div>
			<div className='pt-20 md:pt-40'>
				<MovieCardSimple
					listForRender={movieListNow}
					listTitle={'Populares'}></MovieCardSimple>
				<MovieCardSimple
					listForRender={movieListTopRated}
					listTitle={'Top ranked'}></MovieCardSimple>
				<MovieCardSimple
					listForRender={movieListUpcoming}
					listTitle={'Próximos estrenos'}></MovieCardSimple>
			</div>
		</main>
	);
};

export default Home;
