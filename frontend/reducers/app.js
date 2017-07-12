import {combineReducers} from 'redux';

import count from "./count";
import name from "./name";

const app = combineReducers({
	count: count,
	name: name
});

export default app;