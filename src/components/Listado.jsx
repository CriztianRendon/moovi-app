//MODULES
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
//COMPONENTS

//LIBS
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Listado = ({ addOrRemFronFavs }) => {
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
					autoClose: 1500,
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
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:space-y-0 justify-items-center md:px-0 mx-auto'>
					{movieList.map((movie, idx) => {
						return (
							<div
							key={idx}
							className='grid grid-cols-1 ring-2 ring-slate-300 hover:ring-violet-500 rounded-b-lg'>
							<button
								className='absolute text-xl p-2 justify-self-end'
								onClick={addOrRemFronFavs}
								data-movie-id={movie.id}>
								💜
							</button>
							<figure>
								<img
									src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
									alt={movie.title}
								/>
							</figure>
							<div className='px-3'>
								<h1 className='font-semibold text-center text-xl my-3'>
									{movie.title}
								</h1>
								<div className='text-xs flex justify-between mb-3'>
									<span>🎬 {movie.release_date}</span>
									<span>⭐ {movie.vote_average.toFixed(1)} </span>
								</div>
								<p className='text-sm'>
									{movie.overview.substring(0, 150)}...
								</p>
							</div>
							<div className='p-3 self-end justify-self-end'>
								<Link
									className='text-sm font-light hover:text-violet-300'
									to={`/details/${movie.id}`}>
									Más info ➡️
								</Link>
							</div>
						</div>
						);
					})}
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Listado;
