import { Routes, Route } from 'react-router-dom';
import MyContactsPage from '../pages/MyContactsPage/MyContactsPage';
import SharedLayout from './SharedLayout/SharedLayout';
import Error from './Error/Error';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route path="/my-contacts" element={<MyContactsPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
};
