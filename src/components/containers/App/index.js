import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
	render() {
		return (
			<div>
				<Link to='/'>Home</Link>
				<Link to='/test'>Test</Link>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.object.isRequired
};

export default App;
