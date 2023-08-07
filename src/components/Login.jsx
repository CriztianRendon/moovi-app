//MODULES
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

//COMPONENTS

//LIBS
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
	const navigate = useNavigate();

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
		//FIN VALIDACION FORM

		//PETICION DE TOKEN
		axios
			.post('https://challenge-react.alkemy.org', { email, password })
			.then((res) => {
				sessionStorage.setItem('token', res.data.token);
				toast('Bienvenido!', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 3000,
				});
				navigate('/listado');
			})
			.catch((error) => {
				toast.error('Alguno de los datos es incorrecto. Intenta de nuevo', {
					position: toast.POSITION.BOTTOM_CENTER,
					autoClose: 3000,
				});
			});
		//FIN PETICION DE TOKEN
	};

let token = sessionStorage.getItem('token')

	return (
		<>
			{token && <Navigate to='/listado' />}

			<div className='container'> 
				<h2>Ingresá</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor='email'>Email*</label>
					<br />
					<input className='border border-slate-500 px-3 py-1'
						type='text'
						name='email'
						id='email'
					/>
					<br />
					<label htmlFor='password'>Contraseña*</label>
					<br />
					<input className='border border-slate-500 px-3 py-1'
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
