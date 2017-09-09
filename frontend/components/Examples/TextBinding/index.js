import React from 'react';
import {connect} from 'react-redux';

import { setName } from 'Frontend/actions/name'

class TextBinding extends React.Component {

	handleTextChange(event) {
		this.props.setName(event.target.value);
	}

	render() {
		return (
            <div className="textBindingExample">
                <h1>2-Way Text Binding</h1>
				<form>
					<div className="form-group">
                		<textArea className="form-control bg-inverse text-white" aria-describedby="textInput"
					   onChange={(e)=>this.handleTextChange(e)} type="text" value={this.props.name} placeholder="Input Some Text"/>
					</div>
				</form>
					<div className="text-output">
						<code className="bg-inverse">'{this.props.name}'.match(/[aeiouy]/ig)||[])</code><br/>
						{(this.props.name.match(/[aeiouy]/ig)||[]).length>0?
							<div>Vowels Used: <strong>{this.props.name.match(/[aeiouy]/ig)||[]}</strong></div>
							:
							'No Vowels Used'
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