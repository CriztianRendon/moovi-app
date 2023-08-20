import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {

	let tokenSessionId = sessionStorage.getItem('tokenSessionId');

	if (!tokenSessionId) {
		return (
			<Navigate
				to='/login'
				replace
			/>
		);
	}

	return children;
};

export default RequireAuth;
