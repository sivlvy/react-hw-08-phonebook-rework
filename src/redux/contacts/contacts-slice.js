import { createSlice } from '@reduxjs/toolkit';

import { rejected, pending } from '../constants';

import {
	fetchContacts,
	deleteContact,
	addContact,
} from './contacts-operations';

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	extraReducers: builder =>
		builder
			.addCase(fetchContacts.pending, pending)
			.addCase(fetchContacts.rejected, rejected)
			.addCase(fetchContacts.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items = payload;
			})
			.addCase(addContact.pending, pending)
			.addCase(addContact.rejected, rejected)
			.addCase(addContact.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items.push(payload);
			})
			.addCase(deleteContact.pending, pending)
			.addCase(deleteContact.rejected, rejected)
			.addCase(deleteContact.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items = state.items.filter(({ id }) => id !== payload);
			}),
});

export default contactsSlice.reducer;
