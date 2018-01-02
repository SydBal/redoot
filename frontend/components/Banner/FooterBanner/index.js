import React from 'react';
import {connect} from 'react-redux';

class FooterBanner extends React.Component {

	render() {
		return (
            <div className="banner container-fluid footer" id="stickyFooter">
                <div className="container text-center text-white">
                    <img src="/img/redootLogoWhite.png" className="footLogo" alt="redoot"/>
                    <p>
                        Redoot is released under the MIT license.
                    </p>
                    <p>
                        Please feel free to use this as a tool to start your own React-Redux + Bootstrap website.
                    </p>
                    <p>
                        Good luck with your projects, and leave feedback on <a href="http://github.com/SydBal/redoot">GitHub!</a>
                    </p>
                    Sincerely - Dominic Balassone
                </div>
            </div>
		);
	}
}

export default connect()(FooterBanner)