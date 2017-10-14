import {combineReducers} from 'redux';

import count from "./count/count.spec";
import name from "./name/name.spec";

const app = combineReducers({
	count,
	name
});

export default app;