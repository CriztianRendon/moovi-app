//MODULES
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

//CONTEXTS
import { MainContext } from '../context/MainContext';

//COMPONENTS

//LIBS
import axios from 'axios';
import { toast } from 'react-toastify';

const FormLogin = () => {
	const { getTokenSessionId, setTokenSessionId } = useContext(MainContext);
	const navigate = useNavigate();

	const optionsGuestSessionId = {
		method: 'GET',
		url: 'https://api.themoviedb.org/3/authentication/guest_session/new',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjQxOWM5YzVmM2U5OWZkNjE0ZWQ3ZWVhZDA1MDkwMCIsInN1YiI6IjYzZGZjOWQ2Y2QyMDQ2MDA4MWUyNDc4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wrLtNTAw4akREV93JXsTfPgE1nQw4rxRVYfPd7-Pk8Q',
		},
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		const regexEmail =
			/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		//VALIDACION DE FORM

		if (email === '' || password === '') {
			toast.error('Los campos no pueden estar vacios', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 3000,
			});
			return;
		}

		if (password !== '' && !regexEmail.test(email)) {
			toast.error('Ingresá un email valido', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 3000,
			});
			return;
		}
		if (email !== 'user@moovi.com') {
			toast.error('Email o Password inválidos', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 1000,
			});
			return;
		}

		if (password !== 'moovi') {
			toast.error('Email o Password inválidos', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 1000,
			});
			return;
		}
		//FIN VALIDACION FORM

		//REQUEST GUEST SESSION ID
		axios
			.request(optionsGuestSessionId)
			.then((res) => {
				// setRequestToken(res.data.request_token);
				setTokenSessionId(res.data.guest_session_id);
				toast('Bienvenido', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 500,
				});
				navigate('/home', { replace: true });
			})
			.catch((error) => {
				toast.error('Algo falló al iniciar sesiòn. Intenta de nuevo', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 1000,
				});
				console.log('Request token fail');
			});
		// END REQUEST GUEST SESSION ID
	};

	let tokenSessionId = getTokenSessionId();

	return (
		<>
			{tokenSessionId && <Navigate to='/home' />}
			<main className='container py-10 px-5 items-center md:w-1/4'>
				<h1 className='font-Righteous text-4xl text-center mb-5'>
					mOOvi
				</h1>
				<form
					className='flex flex-col gap-5 items-center '
					onSubmit={handleSubmit}>
					<input
						className='w-full text-white text-md px-5 py-3 rounded bg-slate-700 focus:bg-slate-600 border border-transparent focus:outline-none focus:ring focus:ring-purple-900 focus:border-transparent'
						placeholder='Email'
						type='email'
						name='email'
						id='email'
					/>
					<input
						className='w-full text-white text-md px-5 py-3 rounded bg-slate-700 focus:bg-slate-600 border border-transparent focus:outline-none focus:ring focus:ring-purple-900 focus:border-transparent'
						placeholder='Password'
						type='password'
						name='password'
						id='password'
					/>
					<button
						className='w-full text-white text-md font-semibold rounded-lg py-3 bg-gradient-to-br from-violet-900 to-blue-900 cursor-pointer'
						type='submit'>
						Ingresá
					</button>
				</form>
			</main>
		</>
	);
};

export default FormLogin;
