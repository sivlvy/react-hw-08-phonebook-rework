import { NavLink } from 'react-router-dom';

const NavbarMenu = () => {
	return (
		<ul>
			<li>
				<NavLink to="/my-contacts">My contacts</NavLink>
			</li>
		</ul>
	);
};

export default NavbarMenu;
