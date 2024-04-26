import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import { store } from './redux/store';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename="/react-hw-08-phonebook-rework">
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
