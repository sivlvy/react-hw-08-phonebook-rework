import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import {
	selectAllContacts,
	selectFilteredContacts,
} from '../../redux/selectors';
import {
	addContact,
	deleteContact,
} from '../../redux/contacts/contacts-operations';
import { setFilter } from '../../redux/filter/filter-slice';

export const MyContacts = () => {
	const { isLoading, error } = useSelector(selectAllContacts);
	const items = useSelector(selectFilteredContacts);
	console.log(items);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const handleChange = ({ target }) => dispatch(setFilter(target.value));

	const onAddContact = data => {
		dispatch(addContact(data));
	};

	const onDeleteContact = contactId => {
		dispatch(deleteContact(contactId));
	};

	return (
		<div className="flex justify-between px-10 font-mono py-8 bg-gray-50 mt-36  min-h-96 rounded-xl shadow-md shadow-teal-200">
			<div className="">
				<div className="w-470">
					<h1 className="font-bold text-xl text-center font-mono mb-10">
						Phonebook
					</h1>
				</div>
				<ContactForm onSubmit={onAddContact} />
			</div>
			<div>
				<h2 className="font-bold text-center text-xl mb-10">
					Contacts
				</h2>
				<Filter name="filter" onChange={handleChange} />

				{isLoading ? (
					<Loader />
				) : error ? (
					<div message={error}></div>
				) : items?.length > 0 ? (
					<ContactsList
						contacts={items}
						onDeleteContact={onDeleteContact}
					/>
				) : (
					<Error />
				)}
			</div>
		</div>
	);
};
