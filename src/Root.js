import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import App from './components/containers/App';
import './styles/palette.css';

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Route path={'/'} component={App} />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

Root.propTypes = {
};

export default Root;
