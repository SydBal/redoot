/*
 * Imports
 */
import {NAME_SET} from './name.spec';

/*
 * Initial State
 */
const initialState = '';

/*
 * Reducer Function
 */
function name(state = initialState, action) {
	switch (action.type) {
		case NAME_SET:
			return action.name;
	}
	return state;
}

export default name;