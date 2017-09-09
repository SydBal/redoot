import React from 'react';
import {connect} from 'react-redux';

class IntroBanner extends React.Component {

	render() {
		return (
            <div className="banner container-fluid bg-clear underNav">
                <div className="container text-center text-white">
                    <h1 className="display-3">Redoot</h1>
                    <img src="/assets/img/redootLogoWhite.png" className="img-fluid mainLogo" alt="redoot"/>
                    <h3>A Redux + Bootstrap 4 Website Starter</h3>
                    <h3>Powered by NodeJS</h3>
                    <a href="https://github.com/SydBal/redoot" className="btn btn-secondary gitBtn" role="button">
                        <i className="zmdi zmdi-github zmdi-hc-lg"/> Source
                    </a>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(IntroBanner)