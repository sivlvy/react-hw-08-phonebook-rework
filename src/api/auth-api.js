import axios from 'axios';

const authInstance = axios.create({
	baseURL: 'https://auth-backend-lesson.herokuapp.com/api',
});

const setIsToken = token => {
	if (token) {
		authInstance.defaults.headers.authorization = `Bearer ${token}`;
	}
	authInstance.defaults.headers.authorization = '';
};

export const signUpRequest = async body => {
	const { data } = await authInstance.post('/users/signup', body);
	setIsToken(data.token);
	return data;
};

export const loginRequest = async body => {
	const { data } = await authInstance.post('/users/login', body);
	setIsToken(data.token);

	return data;
};

export const currentRequest = async token => {
	setIsToken(token);
	try {
		const { data } = await authInstance.get('/users/current');
		return data;
	} catch (error) {
		setIsToken();
		throw error;
	}
};

export const logoutRequest = async () => {
	const { data } = await authInstance.post('/users/logout');
	setIsToken();

	return data;
};
