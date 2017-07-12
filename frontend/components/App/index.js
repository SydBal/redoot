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
			<div style={{'maxHeight':'100vh'}}>
				<TopNav/>
				<div className="container-fluid purpleBG">
					<div className="container text-center text-white">
						<h1 className="display-1">Redoot</h1>
						<img src="/assets/img/redootLogoWhite.png" className="img-fluid mainLogo" alt="redoot"/>
						<h1 className="display-4">A Redux-Bootstrap 4 Website Starter</h1>
					</div>
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