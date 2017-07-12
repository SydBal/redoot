//Skeleton for Frontend API fetches
const ENDPOINT = 'http://api.website.com:4200'

const GET_URL    = ENDPOINT + '/api';
const POST_URL   = ENDPOINT + '/api';
const EDIT_URL   = ENDPOINT + '/api';
const DELETE_URL = ENDPOINT + '/api';

export function sampleGetRequest() {
	return fetch(GET_URL, {
		method: 'GET'
	}).then((res) => {
		return res.json();
	}).catch((err) => {
		console.log(GET_URL + " error: " + err)
		return err;
	});
}

export function samplePostRequest(data) {
	return fetch(POST_URL, {
		method: 'POST',
		body: JSON.stringify(user)
	}).then((res) => {
		return res.json();
	}).catch((err) => {
		console.log(POST_URL + " error: " + err)
		return err;
	});
}

export function samplePutRequest(data) {
	return fetch(EDIT_URL, {
		method: 'PUT',
		body: JSON.stringify(data)
	}).then((res)=> {
		return res.json()
	}).catch((err) => {
		console.log(EDIT_URL + " error: " + err)
		return err;
	});
}

export function sampleDeleteRequest(data) {
	return fetch(DELETE_URL, {
		method: 'DELETE',
		body: JSON.stringify(data)
	}).then((res) => {
		return res.json();
	}).catch((err) => {
		console.log(DELETE_URL + " error: " + err)
		return err;
	});
}
