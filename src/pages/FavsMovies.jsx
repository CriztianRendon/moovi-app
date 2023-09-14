import React from 'react';
import FavsList from '../components/FavsList';

const FavsMovies = () => {
	return (
		<div>
			<div className='fixed top-0 z-10 bg-slate-900 shadow-md w-full p-5 md:top-16'>
			<h1 className='font-semibold text-center text-xl'>Tus favoritos</h1>
			</div>
			<FavsList />
		</div>
	);
};

export default FavsMovies;
