/*
 * Action Types
 */
export const COLOR1R = 'COLOR1R';
export const COLOR1G = 'COLOR1G';
export const COLOR1B = 'COLOR1B';
export const COLOR2R = 'COLOR2R';
export const COLOR2G = 'COLOR2G';
export const COLOR2B = 'COLOR2B';
export const DIRECTION = 'DIRECTION';
export const RESETBG = 'RESETBG'

/*
 * Action Creators
 */

export function color1r(value) {
	return {
        type: COLOR1R,
        value
	};
}

export function color1g(value) {
	return {
        type: COLOR1G,
        value
	};
}

export function color1b(value) {
	return {
        type: COLOR1B,
        value
	};
}

export function color2r(value) {
	return {
        type: COLOR2R,
        value
	};
}

export function color2g(value) {
	return {
        type: COLOR2G,
        value
	};
}

export function color2b(value) {
	return {
        type: COLOR2B,
        value
	};
}

export function direction(value) {
    return {
        type: DIRECTION,
        value
    };
}

export function resetBackground(){
    return {
        type: RESETBG
    }
}