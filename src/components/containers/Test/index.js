// @flow
import React, { Component } from 'react';
import { RightAngleIcon } from '../../ui/icons';

type Props = {};

class Test extends Component<Props> {
	render() {
		return (
			<div className='app'>
				<h1 className='header'>
					<RightAngleIcon fixedWidth={true} /> Testing.
				</h1>
			</div>
		);
	}
}

export default Test;
