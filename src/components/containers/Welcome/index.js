import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { RightAngleIcon } from '../../ui/icons';
import Test from '../Test';
import './styles.less';

class Welcome extends Component {
	render() {
		const pathname = this.props.match.path;

		return (
			<div className='app'>
				<h1 className='header'>
					<RightAngleIcon fixedWidth={true} /> Hello, Tyler...
				</h1>

				<Link to={`${pathname}/nested`}>Nested</Link>
				<Route path={`${pathname}/nested`} component={Test}/>
			</div>
		);
	}
}

Welcome.propTypes = {
	match: React.PropTypes.object.isRequired
};

export default Welcome;
