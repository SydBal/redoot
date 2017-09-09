import React from 'react';
import {connect} from 'react-redux';

import { increment, decrement } from 'Frontend/actions/count'

class Counter extends React.Component {

	render() {
		return (
            <div>
                <h1>Counter</h1>
                <p>Value: <strong>{this.props.count}</strong></p>
                <p>
                    <button type="button" className="btn btn-counter btn-outline-primary" onClick={this.props.increment}><strong>+</strong></button>
                    <button type="button" className="btn btn-counter btn-outline-danger" onClick={this.props.decrement}><strong>-</strong></button>
                </p>
            </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		count: state.count
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => {
			dispatch(increment())
		},
		decrement: () => {
			dispatch(decrement())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)