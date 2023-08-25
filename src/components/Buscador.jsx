//MODULES
import { useContext, useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//CONTEXT
import { MainContext } from '../context/MainContext';
//LIBS
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Buscador = () => {
	// const navigate = useNavigate();
	const { handleSearch, movieSearchResults } = useContext(MainContext);

	return (
		<div className='flex items-center justify-center flex-grow w-full'>
			<form
				className='flex'
				id='searchForm'
				// onSubmit={handleSearch}
				>
				<button
					className='bg-slate-700 rounded-l-lg'
					type='submit'>
					<FontAwesomeIcon
						className='text-white h-5 p-3'
						icon={faMagnifyingGlass}
					/>
				</button>
				<input
					className='w-full text-white text-md px-5 py-3 rounded-r-lg bg-slate-700 focus:bg-slate-600 border border-transparent focus:outline-none focus:ring focus:ring-purple-900 focus:border-transparent shadow-xl'
					type='text'
					name='keyword'
					id='keyword'
					placeholder='Buscá tu pelicula...'
					onChange={handleSearch}
				/>
			</form>
		</div>
	);
};

export default Buscador;
