import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import routes from './routes';

const rootEl = document.getElementById('root');
const renderApp = (appRoutes, elem) => {
	ReactDOM.render(
		<AppContainer>
			<Root routes={appRoutes} />
		</AppContainer>,
		elem
	);
};

renderApp(routes, rootEl);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./routes', () => {
		renderApp(routes, rootEl);
	});
}
