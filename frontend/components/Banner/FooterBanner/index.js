import React from 'react';
import {connect} from 'react-redux';

class FooterBanner extends React.Component {

	render() {
		return (
            <div className="banner container-fluid footer">
                <div className="container text-center text-white">
                    <img src="/img/redootLogoWhite.png" className="footLogo" alt="redoot"/>
                    <p>
                        Redoot is released under the MIT license.
                    </p>
                    <p>
                        Please feel free to use this as a tool to start your own React-Redux + Bootstrap website.
                    </p>
                    <p>
                        Good luck with your projects, and leave feedback on GitHub!
                    </p>
                    Sincerely - Dominic Balassone
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterBanner)