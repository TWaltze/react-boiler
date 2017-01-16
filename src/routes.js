import React from 'react';
import { BrowserRouter, Match, Link } from 'react-router';
import App from './components/containers/App';
import Welcome from './components/containers/Welcome';
import Test from './components/containers/Test';

const routes = () => {
	return (
		<BrowserRouter>
			<Link to='/welcome'>Home</Link> | <Link to='/test'>Test</Link>

			<Match exactly pattern="/" component={App} />
			<Match pattern="/welcome" component={Welcome} />
			<Match pattern="/test" component={Test} />
		</BrowserRouter>
	);
};

export default routes;
