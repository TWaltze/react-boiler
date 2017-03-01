import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Welcome from '../Welcome';
import Test from '../Test';

class App extends Component {
	render() {
		return (
			<div>
				<Link to={'/welcome'}>Welcome</Link> | <Link to={'/test'}>Test</Link>

				<Route path={'/welcome'} component={Welcome}/>
				<Route path={'/test'} component={Test}/>
			</div>
		);
	}
}

App.propTypes = {
	match: React.PropTypes.object.isRequired
};

export default App;
