import React, { Component } from 'react';
import { RightAngleIcon } from '../../ui/icons';
import './styles.less';

export default class Welcome extends Component {
	render() {
		return (
			<div className='app'>
				<h1 className='header'>
					<RightAngleIcon fixedWidth={true} /> Hello, Tyler...
				</h1>
			</div>
		);
	}
}
