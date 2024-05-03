import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

import { signup } from '../../redux/auth/auth-operations';
import {
	selectAuthLoading,
	selectAuthError,
} from '../../redux/auth/auth-selectors';

import { useDispatch, useSelector } from 'react-redux';

const RegisterPage = () => {
	const dispatch = useDispatch();

	const isLoading = useSelector(selectAuthLoading);
	const error = useSelector(selectAuthError);

	const handleSubmit = data => {
		dispatch(signup(data));
	};

	return (
		<>
			{isLoading && <Loader />}
			<RegisterForm onSubmit={handleSubmit} />
			{error && <Error />}
		</>
	);
};

export default RegisterPage;
