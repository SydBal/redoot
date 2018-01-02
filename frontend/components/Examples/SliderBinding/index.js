import React from 'react';
import {connect} from 'react-redux';

import { color1r, color1g, color1b, color2r, color2g, color2b, direction, resetBackground } from 'Redux/background'

class SliderBinding extends React.Component {

	changeC1R(e){
		this.props.color1r(e.target.valueAsNumber);
	}

	changeC1G(e){
		this.props.color1g(e.target.valueAsNumber);
	}

	changeC1B(e){
		this.props.color1b(e.target.valueAsNumber);
	}

	changeC2R(e){
		this.props.color2r(e.target.valueAsNumber);
	}

	changeC2G(e){
		this.props.color2g(e.target.valueAsNumber);
	}

	changeC2B(e){
		this.props.color1b(e.target.valueAsNumber);
	}

	changeDirection(e){
		this.props.changeDirection(e.target.valueAsNumber);
	}

	render() {
		return (
            <div>
                <h1>Background Slider Binding</h1>
				<div className="sliderContainer">
					{this.props.background.color1r}
					<input type="range" min="0" max="255" step="1" value={this.props.background.color1r} onChange={(e)=>this.changeC1R(e)}/><br/>
					{this.props.background.color1g}
					<input type="range" min="0" max="255" step="1" value={this.props.background.color1g} onChange={(e)=>this.changeC1G(e)}/><br/>
					{this.props.background.color1b}	
					<input type="range" min="0" max="255" step="1" value={this.props.background.color1b} onChange={(e)=>this.changeC1B(e)}/><br/>
					{this.props.background.color2r}
					<input type="range" min="0" max="255" step="1" value={this.props.background.color2r} onChange={(e)=>this.changeC2R(e)}/><br/>
					{this.props.background.color2g}
					<input type="range" min="0" max="255" step="1" value={this.props.background.color2b} onChange={(e)=>this.changeC2G(e)}/><br/>
					{this.props.background.color2b}
					<input type="range" min="0" max="255" step="1" value={this.props.background.color2c} onChange={(e)=>this.changeC2B(e)}/><br/>	
					{this.props.background.direction}
					<input type="range" min="0" max="360" step="1" value={this.props.background.direction} onChange={(e)=>this.changeDirection(e)}/><br/>
					<button type="button" className="btn btn-counter btn-outline-danger" onClick={this.props.resetBackground}>
						Reset
					</button>
				</div>
            </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		background: state.background
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		color1r: (value) => {
			dispatch(color1r(value))
		},
		color1g: (value) => {
			dispatch(color1g(value))
		},
		color1b: (value) => {
			dispatch(color1b(value))
		},
		color2r: (value) => {
			dispatch(color2r(value))
		},
		color2g: (value) => {
			dispatch(color2g(value))
		},
		color2b: (value) => {
			dispatch(color2b(value))
		},
		direction: (value) => {
			dispatch(direction(value))
		},
		resetBackground: () => {
			dispatch(resetBackground())
		},
		
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderBinding)