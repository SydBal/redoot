import React from 'react';
import {connect} from 'react-redux';

import { increment, decrement } from 'Frontend/actions/count'

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            bg: ''
        }
    }

	render() {
		return (
            <div className={this.state.bg=='inc'?'inc-flash':this.state.bg=='dec'?'dec-flash':'flasher'}>
                <h1>Counter</h1>
                <p>Value: <strong>{this.props.count}</strong></p>
                <p>
                    <button type="button" className="btn btn-counter btn-outline-primary" 
                            onClick={()=>{
                                this.state.bg='inc';this.setState(this.state);this.props.increment();
                                setTimeout(()=>{this.state.bg='';this.setState(this.state);},20)}
                            }>
                        <strong>Increment</strong>
                    </button>
                    <button type="button" className="btn btn-counter btn-outline-danger" 
                            onClick={()=>{
                                this.state.bg='dec';this.setState(this.state);this.props.decrement()
                                setTimeout(()=>{this.state.bg='';this.setState(this.state);},20)}
                            }>
                        <strong>Decrement</strong>
                    </button>
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