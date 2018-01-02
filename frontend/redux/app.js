import {combineReducers} from 'redux';

import count from "./count/count.reducer";
import name from "./name/name.reducer";
import background from "./background/background.reducer";

const app = combineReducers({
	count,
	name,
	background
});

export default app;