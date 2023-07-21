import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Listado = () => {

	let token = localStorage.getItem('token')

	return (
		<>
			{!token && <Navigate to='/' replace={true}/>}

			<div className='container'>
				<h2>Listado component</h2>
			</div>
		</>
	);
};

export default Listado;
