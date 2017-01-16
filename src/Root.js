import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Link } from 'react-router';
import store from './store';
import App from './components/containers/App';
import Welcome from './components/containers/Welcome';
import Test from './components/containers/Test';

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Link to='/'>Home</Link> |
						<Link to='/welcome'>Welcome</Link> |
						<Link to='/test'>Test</Link>

						<Match exactly pattern="/" component={App} />
						<Match pattern="/welcome" component={Welcome} />
						<Match pattern="/test" component={Test} />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

Root.propTypes = {
	// routes: React.PropTypes.func.isRequired
};

export default Root;
