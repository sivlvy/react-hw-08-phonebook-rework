import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { selectAuthLogin } from '../../redux/auth/auth-selectors';

const Navbar = () => {
	const isLogin = useSelector(selectAuthLogin);

	return (
		<>
			<nav className="bg-slate-200 flex justify-between px-4 py-8 rounded-b-2xl rounded-t-md mt-4">
				<Link to="/">Logo</Link>
				<NavbarMenu />
				{isLogin ? <NavbarUser /> : <NavbarAuth />}
			</nav>
		</>
	);
};

export default Navbar;
