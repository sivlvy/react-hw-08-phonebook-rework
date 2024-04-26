import { useState } from 'react';

import css from './login.module.scss';

const initialValues = {
	email: '',
	password: '',
};

const LoginForm = ({ onSubmit }) => {
	const [data, setData] = useState({ ...initialValues });

	const handleSubmit = e => {};

	const handleChange = ({ target }) => {};

	return (
		<form
			className="bg-slate-200 w-fit px-16 py-8 mx-auto mt-24"
			onSubmit={handleSubmit}
		>
			<h2 className="text-center">Sign In</h2>

			<div className={css.block}>
				<label htmlFor="">Email</label>
				<input type="email" required={true} onChange={handleChange} />
			</div>
			<div className={css.block}>
				<label htmlFor="">Password</label>
				<input type="password" required={true} onChange={handleChange} />
			</div>
			<button
				className="block mx-auto border-2 border-slate-300  px-8 py-1"
				type="submit"
			>
				Sign in
			</button>
		</form>
	);
};

export default LoginForm;
