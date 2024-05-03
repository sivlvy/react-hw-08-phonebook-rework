import Container from '../Container/Container';
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
	return (
		<>
			<Container>
				<Navbar />
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</Container>
		</>
	);
};

export default SharedLayout;
