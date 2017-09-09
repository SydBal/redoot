import React from 'react';
import {connect} from 'react-redux';

class GridExample extends React.Component {

    findVowels(str){
        return (str.match(/[aeiouy]/ig)||[]);
    }

	render() {
		return (
            <div>
                <h1>Grid Example</h1>
                <p>Two Columns w/ Two Nested Columns</p>
                <div className="row row-example">
                    <div className="col-md-8">
                    .col-md-8
                    <div className="row">
                        <div className="col-sm-6">.col-sm-6</div>
                        <div className="col-sm-6">.col-sm-6</div>
                    </div>
                    </div>
                    <div className="col-md-4">.col-md-4</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GridExample)