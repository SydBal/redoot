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
			<div className="app-container">
				<TopNav/>
				<IntroBanner/>
				<ComponentExampleBanner/>
				<FooterBanner/>
			</div> 
		);
	}
}

export default connect()(App);