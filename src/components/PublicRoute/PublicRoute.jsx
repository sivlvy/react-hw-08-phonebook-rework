import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuthLogin } from '../../redux/auth/auth-selectors';

const PublicRoute = () => {
	const isLogin = useSelector(selectAuthLogin);

	if (isLogin) {
		return <Navigate to="/my-contacts" />;
	}

	return <Outlet />;
};

export default PublicRoute;
