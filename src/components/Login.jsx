//modules
import { Navigate, useNavigate } from 'react-router-dom';

//components

//libs
import axios from 'axios';

const Login = () => {
	return (
		<>
			{/* {token && <Navigate to='/listado' />} */}

			<div className='container'>
				<h2>Login component</h2>
				<h2>Ingresá</h2>
				<form action=''>
					{/* <form onSubmit={handleSubmit}> */}
					<label htmlFor='email'>Email*</label>
					<br />
					<input
						type='text'
						name='email'
						id='email'
					/>
					<br />
					<label htmlFor='password'>Contraseña*</label>
					<br />
					<input
						type='password'
						name='password'
						id='password'
					/>
					<br />
					<button type='submit'>Ingresar</button>
				</form>
			</div>
		</>
	);
};

export default Login;
