import { NavLink } from 'react-router-dom';

const NavbarAuth = () => {
	return (
		<div className="flex gap-x-2">
			<NavLink to="/register">Register</NavLink>|
			<NavLink to="/login">Login</NavLink>
		</div>
	);
};

export default NavbarAuth;
