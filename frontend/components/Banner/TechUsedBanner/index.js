import React from 'react';
import {connect} from 'react-redux';

class TechUsedBanner extends React.Component {

	render() {
		return (
            <div className="banner componentExample container-fluid">
                <div className="container text-center text-white">
                    <h1 className="display-4">Libraries Used</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            Tech 1
                        </div>
                        <div className="col-lg-6">
                            Tech 2
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            Tech 3
                        </div>
                        <div className="col-lg-6">
                            Tech 
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default connect()(TechUsedBanner)