// @flow
import React, { Component } from 'react';
import { RightAngleIcon } from '../../ui/icons';
import styles from './styles.css';

type Props = {};

class Test extends Component<Props> {
	render() {
		return (
			<div className={styles.app}>
				<h1 className={styles.header}>
					<RightAngleIcon fixedWidth={true} /> Testing.
				</h1>
			</div>
		);
	}
}

export default Test;
