import { useDispatch, useSelector } from 'react-redux';

import { selectAuthUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';

const NavbarUser = () => {
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());
	};
	const { name } = useSelector(selectAuthUser);
	return (
		<div>
			<p>{name}</p>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
};
export default NavbarUser;
