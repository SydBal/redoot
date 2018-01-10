import React from 'react';
import {connect} from 'react-redux';

class ModalExample extends React.Component {

    findVowels(str){
        return (str.match(/[aeiouy]/ig)||[]);
    }

	render() {
		return (
            <div>
                <h1>Modal Example</h1>

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
                            <div className="modal-body">
                                <h5>Popover in a modal</h5>
                                <p>This <a href="#" role="button" className="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                                <hr/>
                                <h5>Tooltips in a modal</h5>
                                <p><a href="#" className="tooltip-test" title="Tooltip">This link</a> and <a href="#" className="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-outline-primary">Save changes</button>
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