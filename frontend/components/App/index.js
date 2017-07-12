import React from 'react';
import {connect} from 'react-redux';

import { increment, decrement } from 'Frontend/actions/count';
import { setName } from 'Frontend/actions/name';

import TopNav from 'Frontend/components/Nav/TopNav';

require('Frontend/styles/main.scss');

class App extends React.Component {
	handleTextChange(event) {
		this.props.setName(event.target.value);
	}

	render() {
		return (
			<div className="bg-inverse" style={{'min-height':'100vh'}}>
				<TopNav/>
				<div className="container text-center text-white">
					<h1 className="display-1">Redoot</h1>
					<h1>The Redux-Bootstrap4 Starter</h1>
					Includes simple Express server and Webpack dev build.
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		count: state.count,
		name: state.name
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => {
			dispatch(increment())
		},
		decrement: () => {
			dispatch(decrement())
		},
		setName: (name) => {
			dispatch(setName(name))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);