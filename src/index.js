import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

const rootEl = document.getElementById('root');
ReactDOM.render(
	<AppContainer>
		<Root />
	</AppContainer>,
	rootEl
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./Root', () => {
		ReactDOM.render(
			<AppContainer>
				<Root />
			</AppContainer>,
			rootEl
		);
	});
}
