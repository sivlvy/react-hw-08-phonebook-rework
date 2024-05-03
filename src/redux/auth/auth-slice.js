import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, current } from './auth-operations';
import { pending, rejected } from '../constants';

const initialState = {
	user: {},
	token: '',
	isLogin: false,
	isLoading: false,
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
			})
			.addCase(login.pending, pending)
			.addCase(login.rejected, rejected)
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.user = payload.user;
				state.token = payload.token;
				state.isLogin = true;
			})
			.addCase(current.pending, pending)
			.addCase(current.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.isLogin = true;
				state.user = payload.user;
				state.token = payload.token;
			})
			.addCase(current.rejected, state => {
				state.token = '';
				state.isLoading = false;
			})
			.addCase(logout.pending, pending)
			.addCase(logout.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
				state.user = {};
				state.token = '';
				state.isLogin = false;
			})
			.addCase(logout.rejected, rejected);
	},
});

export default authSlice.reducer;
