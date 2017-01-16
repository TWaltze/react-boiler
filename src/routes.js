import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/containers/App';
import Welcome from './components/containers/Welcome';
import Test from './components/containers/Test';

const routes = () => {
	return (
		<Route path='/' component={App}>
			<IndexRoute component={Welcome} />
			<Route path='test' component={Test} />
		</Route>
	);
};

export default routes;
