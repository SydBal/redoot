import React from 'react';
import {connect} from 'react-redux';

class ModalExample extends React.Component {

	render() {
		return (
            <div>
                <h1>Modal Example</h1>
                <br/>
                <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4">.col-md-4</div>
                                        <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                                        <div className="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-9">
                                            Level 1: .col-sm-9
                                            <div className="row">
                                                <div className="col-8 col-sm-6">
                                                    Level 2: .col-8 .col-sm-6
                                                </div>
                                                <div className="col-4 col-sm-6">
                                                    Level 2: .col-4 .col-sm-6
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalExample)