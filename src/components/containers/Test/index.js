import React, { Component } from 'react';
import { RightAngleIcon } from '../../ui/icons';

class Test extends Component {
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

Test.propTypes = {
};

export default Test;
