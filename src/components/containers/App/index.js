import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { RightAngleIcon } from '../../ui/icons';
import store from '../../../store';
import './styles.less';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className='app'>
					<h1 className='header'>
						<RightAngleIcon fixedWidth={true} /> Hello, Tyler.
					</h1>
				</div>
			</Provider>
		);
	}
}
