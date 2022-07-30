import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { REPO_NAME } from '@constants/repo';
import store from '@store/store';

import ThemeProvider from '@context/ThemeProvider';
import App from '@containers/App';

import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter basename={`/${REPO_NAME}/`}>
  	<React.StrictMode>
			<Provider store={store}>
				<ThemeProvider>
    			<App />
				</ThemeProvider>
			</Provider>
  	</React.StrictMode>
	</BrowserRouter>
);
