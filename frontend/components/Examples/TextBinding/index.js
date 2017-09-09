import React from 'react';
import {connect} from 'react-redux';

import { setName } from 'Frontend/actions/name'

class TextBinding extends React.Component {

	handleTextChange(event) {
		this.props.setName(event.target.value);
	}

    findVowels(str){
        return (str.match(/[aeiouy]/ig)||[]);
    }

	render() {
		return (
            <div>
                <h1>2-Way Text Binding</h1>
                <input onChange={(e)=>this.handleTextChange(e)} type="text" className="form-control" aria-describedby="textInput" value={this.props.name} placeholder="Input Some Text"/>
                <p>Word: <strong>{this.props.name}</strong><br/>
                Vowels Used: <strong>{this.findVowels(this.props.name)}</strong><br/>
                <code>str.match(/[aeiouy]/ig)||[])</code></p>
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