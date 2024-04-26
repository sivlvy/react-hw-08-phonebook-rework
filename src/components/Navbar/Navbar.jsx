import NavbarMenu from './NavbarMenu/NavbarMenu';
import { Link } from 'react-router-dom';
import NavbarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => {
	return (
		<>
			<nav className="bg-slate-200 flex justify-between px-4 py-8 rounded-b-2xl rounded-t-md mt-4">
				<Link to="/">Logo</Link>
				<NavbarMenu />
				<NavbarAuth />
			</nav>
		</>
	);
};

export default Navbar;
