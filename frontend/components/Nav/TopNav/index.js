import React from 'react';
import {connect} from 'react-redux';

class TopNav extends React.Component {

	render() {
		return (
			<div>
				<nav id="redootNav" className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<a className="navbar-brand" href="#">
						<img src="/img/redootLogoWhite.png" height="28" width="28" className="d-inline-block align-top" alt="" id="brandImg"/>
						Redoot
					</a>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Link</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#">Disabled</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default connect()(TopNav)