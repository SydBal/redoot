/*
 * Imports
 */
import {COLOR1R, COLOR1G, COLOR1B, COLOR2R, COLOR2G, COLOR2B, DIRECTION, RESETBG} from './';

/*
 * Initial State
 */
const initialState = {
    color1r: 86,
    color1g: 61,
    color1b: 124,
    color2r: 41,
    color2g: 43,
    color2b: 44,
    direction: 230
};

/*
 * Reducer Function
 */
let background = (state = initialState, action) => {
	switch (action.type) {
        case COLOR1R:
            return {...state, color1r: action.value}
        case COLOR1G:
            return {...state, color1g: action.value}
        case COLOR1B:
			return {...state, color1b: action.value}
        case COLOR2R:
            return {...state, color2r: action.value}
        case COLOR2G:
            return {...state, color2g: action.value}
        case COLOR2B:
            return {...state, color2b: action.value}
        case DIRECTION:
            return {...state, direction: action.value}
        case RESETBG:
            return initialState
	}
	return state;
};

export default background;