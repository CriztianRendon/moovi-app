//MODULES
import { useEffect, useState } from 'react';
import { Link, Navigate} from 'react-router-dom';
//COMPONENTS

//LIBS
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Listado = () => {
	const [movieList, setmovieList] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/discover/movie?api_key=06419c9c5f3e99fd614ed7eead050900&language=es-ES&sort_by=popularity.desc&page=1'
			)
			.then((resp) => {
				const apiData = resp.data.results;
				setmovieList(apiData);
			})
			.catch((error) => {
				toast.error('Algo falló al cargar la lista. ReloadIt!', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 3000,
				});
			});
	}, []);

	let token = sessionStorage.getItem('token');

	return (
		<>
			{!token && (
				<Navigate
					to='/'
					replace={true}
				/>
			)}

			<div className='container'>
				<h1 className='font-bold'>Listado component</h1>
				{movieList.map((movie, idx) => {
					return (
						<div
							className='p-3'
							key={idx}>
							{/* DATOS PARA MOSTRAR EN CARD */}
							<h2 className='font-semibold'>·{movie.title} </h2>
							<figure className='p-3'>
								<img
									src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
									alt={movie.title}
								/>
							</figure>
							<p className='text-xs mb-3'>{movie.overview}</p>
							<div
								id='buttons'
								className='my-3'>
								<Link
									to={`/details/${movie.id}`}
									// to='/details'
									className='px-3 py-1 mx-5 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500 active:bg-violet-600 rounded-lg'>
									Ver mas
								</Link>
							</div>
							<hr />
						</div>
					);
				})}
			</div>
			<ToastContainer />
		</>
	);
};

export default Listado;
