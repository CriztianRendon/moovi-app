import { useNavigate } from 'react-router-dom';
//LIBS
import { ToastContainer, toast } from 'react-toastify';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Buscador = () => {
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		const keyword = e.currentTarget.keyword.value.trim();
		// console.log(keyword);

		if (keyword.length < 3) {
			toast.error('Ingresá mas de tres letras', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 3000,
			});
		} else {
			navigate(`/search-results/${keyword}`, { replace: false });
			document.getElementById('searchForm').reset();
			// window.location.reload();
		}
	};

	return (
		<div className='flex items-center justify-center flex-grow w-full'>
			<form
				className='flex'
				id='searchForm'
				onSubmit={handleSearch}>
			<button className='bg-slate-700 rounded-l-lg' type='submit'>
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
				/>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Buscador;
