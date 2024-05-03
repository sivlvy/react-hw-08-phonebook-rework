import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectAuthLogin } from '../../../redux/auth/auth-selectors';

const NavbarMenu = () => {
	const isLogin = useSelector(selectAuthLogin);
	return (
		<ul>
			<li>
				{isLogin && <NavLink to="/my-contacts">My contacts</NavLink>}
			</li>
		</ul>
	);
};

export default NavbarMenu;
