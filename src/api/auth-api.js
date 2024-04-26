import axios from 'axios';

const authInstance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com/',
});

export const signUpRequest = async body => {
	const { data } = await authInstance.post('users/signup', body);
	return data;
};
