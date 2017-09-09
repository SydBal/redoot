import React from 'react';
import {connect} from 'react-redux';

import { setName } from 'Frontend/actions/name'

class SliderBinding extends React.Component {

	handleTextChange(event) {
		this.props.setName(event.target.value);
	}

	render() {
		return (
            <div>
                <h1>Slider Binding</h1>
            </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.name
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch(setName(name))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderBinding)