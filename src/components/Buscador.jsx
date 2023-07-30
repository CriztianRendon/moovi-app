import { useNavigate } from 'react-router-dom';
//LIBS
import { ToastContainer, toast } from 'react-toastify';

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
		<div className='container'>
			<form
				className='flex'
				id='searchForm'
				onSubmit={handleSearch}>
				<input
					className='px-3 rounded-md ring-2 ring-violet-500 focus:ring-violet-500'
					type='text'
					name='keyword'
					id='keyword'
					placeholder='Buscá tu pelicula...'
				/>
				<br />
				<button
					className='mx-5 px-5 py-1 ring-2 ring-violet-500 hover:ring-violet-300 hover:bg-violet-500  rounded-lg'
					type='submit'>
					Buscar
				</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Buscador;
