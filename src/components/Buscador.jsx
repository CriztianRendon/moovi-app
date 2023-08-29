//MODULES
import { useContext } from 'react';
//CONTEXT
import { MainContext } from '../context/MainContext';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const Buscador = () => {
	// const navigate = useNavigate();
	const { handleSearch, clearSearchForm, keyword } = useContext(MainContext);

	return (
			<div className='flex container w-full p-5'>
				<button className='bg-slate-700 rounded-l-lg'>
					{keyword !== '' ? (
						<FontAwesomeIcon
							className='text-white h-5 w-5 p-3'
							icon={faXmark}
							onClick={clearSearchForm}
						/>
					) : (
						<FontAwesomeIcon
							className='text-white h-5 w-5 p-3'
							icon={faMagnifyingGlass}
						/>
					)}
				</button>
				<input
					className='w-full text-white text-md px-5 py-3 rounded-r-lg bg-slate-700 focus:bg-slate-600 border border-transparent focus:outline-none focus:ring focus:ring-purple-900 focus:border-transparent shadow-xl'
					type='text'
					name='keyword'
					id='keyword'
					value={keyword}
					placeholder='Buscá tu pelicula...'
					onChange={handleSearch}
				/>
			</div>
	);
};

export default Buscador;
