import React, { Component } from 'react';
import { Match, Link } from 'react-router';
import Welcome from '../Welcome';
import Test from '../Test';

class App extends Component {
	render() {
		return (
			<div>
				<Link to={'/welcome'}>Welcome</Link> | <Link to={'/test'}>Test</Link>

				<Match pattern={'/welcome'} component={Welcome}/>
				<Match pattern={'/test'} component={Test}/>
			</div>
		);
	}
}

App.propTypes = {
	pathname: React.PropTypes.string.isRequired
};

export default App;
