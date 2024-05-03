import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { selectAuthLogin } from '../../redux/auth/auth-selectors';

const PrivateRoute = () => {
	const isLogin = useSelector(selectAuthLogin);

	if (!isLogin) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
};

export default PrivateRoute;
