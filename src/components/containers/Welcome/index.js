import React, { Component } from 'react';
import { Match, Link } from 'react-router';
import { RightAngleIcon } from '../../ui/icons';
import Test from '../Test';
import './styles.less';

class Welcome extends Component {
	render() {
		const pathname = this.props.pathname;

		return (
			<div className='app'>
				<h1 className='header'>
					<RightAngleIcon fixedWidth={true} /> Hello, Tyler...
				</h1>

				<Link to={`${pathname}/nested`}>Nested</Link>
				<Match pattern={`${pathname}/nested`} component={Test}/>
			</div>
		);
	}
}

Welcome.propTypes = {
	pathname: React.PropTypes.string.isRequired
};

export default Welcome;
