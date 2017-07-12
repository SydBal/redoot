/*
 * Action Types
 */
export const NAME_SET = 'NAME_SET';

/*
 * Action Creators
 */

export function setName(name) {
	return {
		type: NAME_SET,
		name
	};
}