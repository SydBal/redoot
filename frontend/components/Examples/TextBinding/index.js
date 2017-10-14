import React from 'react';
import {connect} from 'react-redux';

import { setName } from 'Redux/name'

class TextBinding extends React.Component {

	handleTextChange(event) {
		this.props.setName(event.target.value);
	}

	render() {
		return (
            <div className="textBindingExample">
                <h1>Text Binding</h1>
				<form>
					<div className="form-group">
                		<textarea className="form-control text-white" aria-describedby="textInput"
					   onChange={(e)=>this.handleTextChange(e)} type="text" value={this.props.name} placeholder="Input Some Text"/>
					</div>
				</form>
					<div className="text-output">
						<code className="bg-clear">'{this.props.name}'.match(/[aeiouy]/ig)||[])</code><br/>
						{(this.props.name.match(/[aeiouy]/ig)||[]).length>0?
							<div className="text-primary">Vowels Used: <strong>{this.props.name.match(/[aeiouy]/ig)||[]}</strong></div>
							:
							<div className="text-danger">No Vowels Used</div>
						}
					</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TextBinding)