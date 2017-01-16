import React, { Component } from 'react';
// import { Match, Link } from 'react-router';
// import Welcome from '../Welcome';
// import Test from '../Test';

class App extends Component {
	render() {
		return (
			<div>Home!</div>
		);
	}
}

App.propTypes = {
	// children: React.PropTypes.object.isRequired
	pathname: React.PropTypes.string.isRequired
};

export default App;
