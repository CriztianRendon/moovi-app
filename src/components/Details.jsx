//MODULES
import { useState, useEffect } from 'react';
import { useParams, Navigate} from 'react-router-dom';

//COMPONENTS

//LIBS
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Details = () => {
	const { id } = useParams();
	

	const [movieDetails, setMovieDetails] = useState([]);
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=06419c9c5f3e99fd614ed7eead050900&language=es-ES`;
		axios
			.get(endPoint)
			.then((resp) => {
				setMovieDetails(resp.data);
				setGenres(resp.data.genres);
        console.log(id);
			})
			.catch((error) => {
				toast.error('Algo falló al cargar los detalles. ReloadIt!', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 3000,
				});
			});
	}, []);

	return (
		<>
			{movieDetails && (
				<>
					<div className='container'>
						<h1 className='font-semibold text-xl'>{movieDetails.title}</h1>
						<figure className='p-3'>
							<img
								src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`}
								alt={movieDetails.title}
							/>
						</figure>
						<span>{movieDetails.release_date}</span>
						···
						<span>{movieDetails.vote_average} </span>
						<p>{movieDetails.overview}</p>
						<h2>Géneros</h2>
						<ul>
							{genres.map((genre) => (
								<li key={genre.id}>{genre.name}</li>
							))}
						</ul>
					</div>
				</>
			)}
			<ToastContainer />
		</>
	);
};

export default Details;
