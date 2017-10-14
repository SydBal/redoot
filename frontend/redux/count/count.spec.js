/*
 * Imports
 */
import {INCREMENT, DECREMENT} from './';

/*
 * Initial State
 */
const initialState = 0;

/*
 * Reducer Function
 */
let count = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
	}
	return state;
};

export default count;