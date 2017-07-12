/*
 * Action Types
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/*
 * Action Creators
 */

export function increment() {
	return {
		type: INCREMENT,
	};
}

export function decrement() {
	return {
		type: DECREMENT,
	};
}