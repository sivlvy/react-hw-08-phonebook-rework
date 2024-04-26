import RegisterForm from '../../components/RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/auth-operations';

import { useDispatch } from 'react-redux';

const RegisterPage = () => {
	const dispatch = useDispatch();

	const handleSubmit = data => {
		dispatch(signup(data));
	};

	return <RegisterForm onSubmit={handleSubmit} />;
};

export default RegisterPage;
