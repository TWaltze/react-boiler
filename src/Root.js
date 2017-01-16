import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';
import store from './store';
import App from './components/containers/App';

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Match pattern="/" component={App} />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

Root.propTypes = {
};

export default Root;
