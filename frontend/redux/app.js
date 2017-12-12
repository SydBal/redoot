import {combineReducers} from 'redux';

import count from "./count/count.reducer";
import name from "./name/name.reducer";

const app = combineReducers({
	count,
	name
});

export default app;