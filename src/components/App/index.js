import React, { Component } from 'react';
import styles from './styles.less';

export default class App extends Component {
	render() {
		return (
			<div className={[styles.highlight].join(' ')}>
				<h1 className={styles.header}>Hello, Tyler.</h1>
			</div>
		);
	}
}
