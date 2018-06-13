// @flow
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { RightAngleIcon } from '../../ui/icons';
import Test from '../Test';
import styles from './styles.css';

type Props = {
	match: {
		path: string
	}
};

class Welcome extends Component<Props> {
	render() {
		const { path } = this.props.match;

		return (
			<div className={styles.app}>
				<h1 className={styles.header}>
					<RightAngleIcon fixedWidth /> {'Hello, Tyler...'}
				</h1>

				<Link to={`${path}/nested`}>{'Nested'}</Link>
				<Route path={`${path}/nested`} component={Test} />
			</div>
		);
	}
}

export default Welcome;
