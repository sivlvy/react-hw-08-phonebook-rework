import { useState, useId } from 'react';

import css from './register.module.scss';

const initialValues = {
	name: '',
	email: '',
	password: '',
};

const RegisterForm = ({ onSubmit }) => {
	const [data, setData] = useState({ ...initialValues });

	const reset = () => {
		setData({ ...initialValues });
	};

	const handleSubmit = e => {
		e.preventDefault();

		onSubmit({ ...data });
		reset();
	};

	const handleChange = ({ target }) => {
		const { name, value, type, checked } = target;

		const newValue = type === 'checkbox' ? checked : value;

		setData({
			...data,
			[name]: newValue,
		});
	};

	const nameId = useId();
	const emailId = useId();
	const passwordId = useId();

	const { email, name, password } = data;

	return (
		<form
			className="bg-slate-200 w-fit px-16 py-8 mx-auto mt-24"
			onSubmit={handleSubmit}
		>
			<h2 className="text-center">Sign Up</h2>
			<div className={css.block}>
				<label className="" htmlFor={nameId}>
					Name
				</label>
				<input
					value={name}
					name="name"
					id={nameId}
					type="text"
					onChange={handleChange}
				/>
			</div>
			<div className={css.block}>
				<label htmlFor={emailId}>Email</label>
				<input
					value={email}
					name="email"
					id={emailId}
					type="email"
					required={true}
					onChange={handleChange}
				/>
			</div>
			<div className={css.block}>
				<label htmlFor={passwordId}>Password</label>
				<input
					value={password}
					name="password"
					id={passwordId}
					type="password"
					required={true}
					onChange={handleChange}
				/>
			</div>
			<button
				className="block mx-auto border-2 border-slate-300  px-8 py-1"
				type="submit"
			>
				Register
			</button>
		</form>
	);
};

export default RegisterForm;
