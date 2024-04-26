import { signUpRequest } from '../../api/auth-api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
	'auth/signup',
	async (body, { rejectWithValue }) => {
		try {
			const { data } = await signUpRequest(body);
			return data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);
