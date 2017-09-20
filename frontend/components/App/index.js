import React from 'react';
import {connect} from 'react-redux';

import TopNav from 'Frontend/components/Nav/TopNav';
import IntroBanner from 'Frontend/components/Banner/IntroBanner';
import ComponentExampleBanner from 'Frontend/components/Banner/ComponentExampleBanner';
import FooterBanner from 'Frontend/components/Banner/FooterBanner';

require('Frontend/styles/root.scss');

class App extends React.Component {
	render() {
		return (
			<div style={{'minHeight':'100vh'}}>
				<TopNav/>
				<IntroBanner/>
				<ComponentExampleBanner/>
				<FooterBanner/>
			</div> 
		);
	}
}

const mapStateToProps = (state) => {
	return {

	}
};

const mapDispatchToProps = (dispatch) => {
	return {

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);