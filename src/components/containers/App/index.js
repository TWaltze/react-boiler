// @flow
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Welcome from '../Welcome';
import Test from '../Test';

type Props = {}

class App extends Component<Props> {
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

export default App;
