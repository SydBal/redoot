import React from 'react';
import {connect} from 'react-redux';

import {getUsersRequest} from 'Frontend/requests/users';

class GetUsersButton extends React.Component {

	getUsers() {
		getUsersRequest().then((res) => {
			console.log(res)
		}).catch((e) => {
			console.log(e)
		});
	}

	render() {
		return (
			<button onClick={()=>this.getUsers()}>Get Users</button>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users
	}
};

const mapDispatchToProps = (dispatch) => {
	return {

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(GetUsersButton)