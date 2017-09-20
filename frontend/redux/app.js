import {combineReducers} from 'redux';

import count from "./count/count";
import name from "./name/name";

const app = combineReducers({
	count,
	name
});

export default app;