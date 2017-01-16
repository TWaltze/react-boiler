import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/containers/App';

const rootEl = document.getElementById('root');
ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	rootEl
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/containers/App', () => {
		ReactDOM.render(
			<AppContainer>
				<App />
			</AppContainer>,
			rootEl
		);
	});
}
