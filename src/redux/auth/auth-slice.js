import { createSlice } from '@reduxjs/toolkit';

import { signup } from './auth-operations';
import { pending, rejected } from '../constants';

const initialState = {
	user: {},
	token: '',
	isLogin: false,
	isLoading: true,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(signup.pending, pending)
			.addCase(signup.rejected, rejected)
			.addCase(signup.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.user = payload.user;
				state.token = payload.token;
				state.isLogin = true;
			});
	},
});

export default authSlice.reducer;
