import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';
import {
	selectAuthError,
	selectAuthLoading,
} from '../../redux/auth/auth-selectors';

const LoginPage = () => {
	const dispatch = useDispatch();

	const isLoading = useSelector(selectAuthLoading);
	const error = useSelector(selectAuthError);

	const handleLogin = data => {
		dispatch(login(data));
	};

	return (
		<>
			{isLoading && <Loader />}
			{error && <Error />}
			<LoginForm onSubmit={handleLogin} />
		</>
	);
};

export default LoginPage;
