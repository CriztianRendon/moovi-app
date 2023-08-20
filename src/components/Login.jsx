//MODULES
import { useEffect, useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

//CONTEXTS
import { MainContext } from '../context/MainContext';

//COMPONENTS

//LIBS
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ login }) => {
	const { setTokenSessionId } = useContext(MainContext);
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
				navigate('/listado');
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

	return (
		<>
			<div className='container'>
				<h2>Ingresá</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor='email'>Email*</label>
					<br />
					<input
						className='border border-slate-500 px-3 py-1'
						type='text'
						name='email'
						id='email'
					/>
					<br />
					<label htmlFor='password'>Contraseña*</label>
					<br />
					<input
						className='border border-slate-500 px-3 py-1'
						type='password'
						name='password'
						id='password'
					/>
					<br />
					<button type='submit'>Ingresar</button>
				</form>
				<ToastContainer />
			</div>
		</>
	);
};

export default Login;
