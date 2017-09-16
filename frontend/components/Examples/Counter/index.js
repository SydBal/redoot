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

    componentDidUpdate(prevProps, prevState){
        if(this.state.bg!=''){
            window.requestAnimationFrame(()=>{
                let newState = Object.assign({}, this.state)
                newState.bg = ''
                this.setState(newState)
            }) 
        }
    }

	render() {
        let flash = (color) => {
            window.requestAnimationFrame(()=>{
                let newState = Object.assign({}, this.state)
                newState.bg = color
                this.setState(newState)
            })
        }

		return (
            <div className={this.state.bg==''?'flasher':'flash'} style={{'background':this.state.bg}}>
                <h1>Counter</h1>
                <p>Value: <strong>{this.props.count}</strong></p>
                <p>
                    <button type="button" className="btn btn-counter btn-outline-primary" 
                            onClick={()=>{
                                this.props.increment()
                                flash('blue')
                            }}>
                        <strong>Increment</strong>
                    </button>
                    <button type="button" className="btn btn-counter btn-outline-danger" 
                            onClick={()=>{
                                this.props.decrement()
                                flash('red')
                            }}>
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