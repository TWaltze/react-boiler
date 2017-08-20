// @flow
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { RightAngleIcon } from '../../ui/icons';
import Test from '../Test';
import './styles.less';

type Props = {
	match: {
		path: string
	}
};

class Welcome extends Component<Props> {
	render() {
		const { path } = this.props.match;

		return (
			<div className='app'>
				<h1 className='header'>
					<RightAngleIcon fixedWidth={true} /> Hello, Tyler...
				</h1>

				<Link to={`${path}/nested`}>Nested</Link>
				<Route path={`${path}/nested`} component={Test}/>
			</div>
		);
	}
}

export default Welcome;
